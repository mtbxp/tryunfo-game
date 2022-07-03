import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
// import data from './data';

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
      isSaveButtonDisabled: true,
      cardList: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.buttonDisabledTest);
  }

  buttonDisabledTest = () => {
    // Trecho formatado após consulta no código da amiga Larissa-Menezes
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const valorMax = 90;
    const somatoriaValores = 210;
    if (
      cardName
      && cardDescription
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= valorMax
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= valorMax
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= valorMax
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= somatoriaValores
      && cardImage
      && cardRare
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  hasTrundoCheck = () => {
    const { cardList } = this.state;
    console.log(cardList);
    const getCardTrunfo = cardList.some((trunfo) => trunfo.cardTrunfo);
    if (getCardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  onSaveButtonClick = (event) => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state;
    event.preventDefault();
    const newCard = {
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
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      cardList: [...prevState.cardList, newCard],
    }), this.hasTrundoCheck);
  };

  deleteCard = ({ target }) => {
    const { id: cardName } = target;
    const { cardList } = this.state;
    this.setState({
      cardList: cardList.filter((card) => card.cardName !== cardName),
    }, () => this.setState({ hasTrunfo: this.hasTrundoCheck() }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, cardList } = this.state;
    return (
      <div>
        <header>
          <h1>Ark Card Game</h1>
        </header>
        <div className="cardCreate-container">
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
        </div>
        <section>
          <h2>Lista de Cards</h2>
        </section>
        <div className="cardList-container">
          {cardList.map((element) => (
            <li key={ element.cardName } className="card">
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <button
                type="button"
                id={ element.cardName }
                className="btnDelete"
                data-testid="delete-button"
                onClick={ this.deleteCard }
              >
                Excluir
              </button>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
