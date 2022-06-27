// Project <Tryunfo> from <Larissa Menezes> done in 22.06.24 for the Trybe course, 11th week. It has been used as reference the notes from the class an external links indicated along the code line

import React from 'react';
import Card from './components/Card';
import FilterForm from './components/FilterForm';
import Form from './components/Form';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      isFilterAbled: false,
      myCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, this.validateButton);
  }

  validateButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSumAtt = 210;
    const maxAtt = 90;
    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSumAtt
      && Number(cardAttr1) <= maxAtt && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxAtt && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxAtt && Number(cardAttr3) >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  veriryTrunfo = () => {
    const { myCards } = this.state;
    if (myCards.length === 0) return false;
    return !myCards.every((card) => card.cardTrunfo === false);
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((estadoAnterior) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      myCards: [...estadoAnterior.myCards, newCard],
    }), () => this.setState({ hasTrunfo: this.veriryTrunfo() }));
  }

  deleteCard = ({ target }) => {
    const { id: cardName } = target;
    const { myCards: lastCards } = this.state;
    this.setState({
      myCards: lastCards.filter((card) => card.cardName !== cardName),
    }, () => this.setState({ hasTrunfo: this.veriryTrunfo() }));
  }

  filterCard = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    const { myCards: lastCards } = this.state;
    this.setState(() => ({
      myCards: lastCards.filter((card) => card[name].includes(value)),
    }));
  }

  selectedFilter = () => {
    this.setState({ isFilterAbled: true });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo, myCards } = this.state;
    const { isSaveButtonDisabled, isFilterAbled } = this.state;
    return (
      <div className="body">
        <header>My deck of cards</header>
        <section className="add-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
          />
        </section>
        <section className="cards-display">
          <FilterForm
            filterCard={ this.filterCard }
            isFilterAbled={ isFilterAbled }
            selectedFilter={ this.selectedFilter }
          />
          All the cards:
          <ul className="cards-list">
            {
              myCards.map((card) => (
                <li key={ card.cardName } className="card">
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    type="button"
                    onClick={ this.deleteCard }
                    id={ card.cardName }
                    data-testid="delete-button"
                  >
                    Excluir
                  </button>
                </li>
              ))
            }
          </ul>
        </section>
        <footer>by @Larissa Menezes, 2022</footer>
      </div>
    );
  }
}

export default App;
