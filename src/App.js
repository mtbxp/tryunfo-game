import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';
// import data from './data';
import Header from './components/Header';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      nameFilter: '',
      rareFilter: '',
      trunfoFilter: false,
    };
  }

  onSaveButtonClick = (event) => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;

    event.preventDefault();

    let hasTrunfo;

    if (cardTrunfo) hasTrunfo = true; else hasTrunfo = false;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      nameFilter: '',
      rareFilter: '',
      trunfoFilter: false,
      hasTrunfo,
    }));
  }

  validateForm = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;

    const maxAttr = 90;
    const minAttr = 0;
    const maxTotalAttr = 210;
    const totalAttr = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);

    // console.log(totalAttr);

    let errors = false;

    if (cardName.length === 0) errors = true;

    if (cardDescription.length === 0) errors = true;

    if (cardImage.length === 0) errors = true;

    if (cardAttr1 < minAttr || cardAttr1 > maxAttr) errors = true;

    if (cardAttr2 < minAttr || cardAttr2 > maxAttr) errors = true;

    if (cardAttr3 < minAttr || cardAttr3 > maxAttr) errors = true;

    if (totalAttr > maxTotalAttr) errors = true;

    if (cardRare.length === 0) errors = true;

    return errors;
  }

  getErrors = () => {
    const errors = this.validateForm();

    this.setState(() => ({
      isSaveButtonDisabled: errors,
    }));
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.getErrors());
  }

  eraseCard = (cardName) => {
    const { cards } = this.state;
    const cardToErase = cards.find((card) => card.cardName === cardName);

    if (cardToErase.cardTrunfo) this.setState({ hasTrunfo: false });

    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => card.cardName !== cardName),
    }));
  }

  filteredCard = () => {
    const { cards, nameFilter, rareFilter, trunfoFilter } = this.state;
    return cards.filter((card) => {
      if (!nameFilter && !rareFilter && !trunfoFilter) return true;
      if (nameFilter && card.cardName.includes(nameFilter)) return true;
      if (rareFilter && card.cardRare === rareFilter) return true;
      if (trunfoFilter && card.cardTrunfo) return true;
      return false;
    });
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      nameFilter, rareFilter, trunfoFilter,
    } = this.state;

    const cards = this.filteredCard();
    // console.log(cards);

    return (
      <div>
        <Header />
        <div className="card-inputs">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            eraseCard={ this.eraseCard }
            list={ false }
          />
        </div>
        <Filters
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          onInputChange={ this.onInputChange }
        />
        <div className="cards">
          {
            cards.length !== 0
              ? cards.map((card) => (
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  eraseCard={ this.eraseCard }
                  list
                />
              )) : undefined
          }
        </div>
      </div>
    );
  }
}

export default App;
