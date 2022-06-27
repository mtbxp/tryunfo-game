import React from 'react';

import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      filteredCards: [],
    };
    this.isSaveButtonDisabled = true;
    this.handleChange = this.handleChange.bind(this);
    this.checkRequiredFields = this.checkRequiredFields.bind(this);
    this.handleCardCreation = this.handleCardCreation.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.filterCardsByName = this.filterCardsByName.bind(this);
    this.filterCardsByRarity = this.filterCardsByRarity.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    if (type === 'checkbox') {
      const { checked } = target;
      this.setState({ [name]: checked });
    } else {
      const { value } = target;
      this.setState({ [name]: value });
    }
  }

  handleCardCreation(event) {
    event.preventDefault();
    const { cardAttr1, cardAttr2, cardAttr3, cardName, cardDescription, cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      name: cardName,
      desc: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rarity: cardRare,
      trunfo: cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((previous) => (
      { cards: [...previous.cards, newCard],
        filteredCards: [...previous.cards, newCard],
      }));
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  handleSaveButtonState() {
    const {
      cardAttr1, cardAttr2, cardAttr3, cardName, cardDescription, cardImage, cardRare,
    } = this.state;
    const attrSum = this.checkAttrsSum(cardAttr1, cardAttr2, cardAttr3);
    const attr1Value = this.checkAttrValue(parseInt(cardAttr1, 10));
    const attr2Value = this.checkAttrValue(parseInt(cardAttr2, 10));
    const attr3Value = this.checkAttrValue(parseInt(cardAttr3, 10));
    const requiredFields = this.checkRequiredFields([cardName,
      cardDescription,
      cardImage,
      cardRare]);
    const validations = [attrSum, attr1Value, attr2Value, attr3Value, requiredFields];
    const isValid = validations.every((validation) => validation);
    if (isValid) {
      this.isSaveButtonDisabled = false;
    } else {
      this.isSaveButtonDisabled = true;
    }
  }

  handleRemoveCard(idx) {
    const { cards } = this.state;
    const currentCards = cards.filter((_, index) => idx !== index);
    this.setState(() => ({ cards: currentCards, filteredCards: currentCards }));
  }

  filterCardsByName({ target }) {
    const { value: cardName } = target;
    if (!cardName) {
      this.setState(({ cards }) => ({ filteredCards: cards }));
    } else {
      this.setState(({ cards }) => (
        { filteredCards: cards.filter(({ name }) => (
          name.toLowerCase().includes(cardName.toLowerCase())
        )) }
      ));
    }
  }

  filterCardsByRarity({ target }) {
    const { value } = target;
    if (value === 'todas') {
      this.setState(({ cards }) => ({ filteredCards: cards }));
    } else {
      this.setState(({ cards }) => (
        { filteredCards: cards.filter(({ rarity }) => rarity === value) }
      ));
    }
  }

  checkAttrsSum(attr1, attr2, attr3) {
    const sum = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const maxAttr = 210;
    const minAttr = 0;
    if (sum > maxAttr || sum <= minAttr) {
      return false;
    }
    return true;
  }

  checkAttrValue(attrValue) {
    const maxAttrValue = 90;
    const minAttrValue = 0;
    if (attrValue > maxAttrValue || attrValue < minAttrValue) {
      return false;
    }
    return true;
  }

  testLength(field) {
    return field.length === 0;
  }

  checkRequiredFields(fieldsToTest) {
    let returnedValue = true;
    fieldsToTest.forEach((field) => {
      if (this.testLength(field)) returnedValue = false;
    });
    return returnedValue;
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      filteredCards,
    } = this.state;
    const rarities = ['todas', 'normal', 'raro', 'muito raro'];
    this.handleSaveButtonState();

    return (
      <div>
        <header><h1>Naruto Trunfo</h1></header>
        <section id="section__create-card">
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
            isSaveButtonDisabled={ this.isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleCardCreation }
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
        <section id="section__cards">
          <div id="toolbar__filter">
            <input
              type="text"
              data-testid="name-filter"
              onChange={ this.filterCardsByName }
            />
            <select data-testid="rare-filter" onChange={ this.filterCardsByRarity }>
              {rarities.map((rarity) => (
                <option key={ rarity } value={ rarity }>{rarity}</option>
              ))}
            </select>
          </div>
          {filteredCards.map(
            ({ name, desc, attr1, attr2, attr3, image, rarity, trunfo }, id) => (
              <div key={ id } className="cards__created">
                <Card
                  cardName={ name }
                  cardDescription={ desc }
                  cardAttr1={ attr1 }
                  cardAttr2={ attr2 }
                  cardAttr3={ attr3 }
                  cardImage={ image }
                  cardRare={ rarity }
                  cardTrunfo={ trunfo }
                />
                <button
                  className="button__delete-card"
                  type="button"
                  onClick={ () => this.handleRemoveCard(id) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ),
          )}
        </section>
      </div>
    );
  }
}

export default App;
