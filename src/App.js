import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';
import Deck from './components/Deck';
import savedDeck from './deck/deckData';

let cardDeck = savedDeck;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      deckLength: cardDeck.length,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.clearState = this.clearState.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.updateSaveButton = this.updateSaveButton.bind(this);
    this.checkNoEmptyInput = this.checkNoEmptyInput.bind(this);
    this.checkValidAttrs = this.checkValidAttrs.bind(this);
    this.hasSuperTrunfo = this.hasSuperTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name, type, checked } = target;
    const value = (type === 'checkbox') ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.updateSaveButton());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    cardDeck.unshift({
      cardIndex: '',
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.hasSuperTrunfo();
    this.clearState();
    this.assignId();
  }

  assignId() {
    cardDeck.forEach((card, index) => {
      card.cardIndex = index;
    });
  }

  deleteCard(cardIndex) {
    cardDeck = cardDeck.filter((card) => card.cardIndex !== cardIndex);
    this.setState({
      deckLength: cardDeck.length,
    });
  }

  clearState() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  hasSuperTrunfo() {
    const hasSuperTrunfoCard = !(cardDeck.every((card) => card.cardTrunfo === false));
    this.setState({
      hasTrunfo: hasSuperTrunfoCard,
    });
  }

  checkNoEmptyInput() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    return [
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ].every((prop) => prop !== '');
  }

  checkValidAttrs() {
    const minValue = 0;
    const maxValue = 90;
    const maxTotal = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attrArr = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const isValidAttr = attrArr.every((attr) => attr >= minValue && attr <= maxValue);
    const isValidTotal = attrArr.reduce((prev, curr) => prev + curr) <= maxTotal;
    return (isValidAttr && isValidTotal);
  }

  updateSaveButton() {
    if (this.checkNoEmptyInput() && this.checkValidAttrs()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      deckLength,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    this.assignId();

    return (
      <>
        <Header />
        <section className="main-section">
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
        <div className="deck-container">
          <Deck
            savedDeck={ cardDeck }
            deleteCard={ this.deleteCard }
            deckLength={ deckLength }
          />
        </div>
      </>
    );
  }
}

export default App;
