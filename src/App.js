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
      superTrunfoFilter: false,
    };
    this.isSaveButtonDisabled = true;
    this.handleChange = this.handleChange.bind(this);
    this.checkRequiredFields = this.checkRequiredFields.bind(this);
    this.handleCardCreation = this.handleCardCreation.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.filterCardsByName = this.filterCardsByName.bind(this);
    this.filterCardsByRarity = this.filterCardsByRarity.bind(this);
    this.filterCardsBySuperTrunfo = this.filterCardsBySuperTrunfo.bind(this);
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
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
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
    if (isValid) this.isSaveButtonDisabled = false;
    else this.isSaveButtonDisabled = true;
  }

  handleRemoveCard(idx) {
    const { cards } = this.state;
    const currentCards = cards.filter((_, index) => idx !== index);
    this.setState({ cards: currentCards, filteredCards: currentCards });
  }

  testLength = (field) => field.length === 0;

  filterCardsByName({ target }) {
    const { value: cardName } = target;
    if (!cardName) {
      this.setState(({ cards }) => ({ filteredCards: cards }));
    } else {
      this.setState(({ cards }) => (
        { filteredCards: cards.filter(({ cardName: name }) => (
          name.toLowerCase().includes(cardName.toLowerCase())
        )) }
      ));
    }
  }

  filterCardsByRarity({ target: { value } }) {
    if (value === 'todas') {
      this.setState(({ cards }) => ({ filteredCards: cards }));
    } else {
      this.setState(({ cards }) => (
        { filteredCards: cards.filter(({ cardRare }) => cardRare === value) }
      ));
    }
  }

  filterCardsBySuperTrunfo({ target: { checked } }) {
    console.log(checked);
    if (!checked) {
      this.setState(({ cards }) => ({ filteredCards: cards, superTrunfoFilter: false }));
    } else {
      this.setState(({ cards }) => (
        {
          filteredCards: cards.filter(({ cardTrunfo }) => cardTrunfo),
          superTrunfoFilter: true,
        }
      ));
    }
  }

  checkAttrsSum(attr1, attr2, attr3) {
    const sum = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const maxAttr = 210;
    const minAttr = 0;
    if (sum > maxAttr || sum <= minAttr) return false;
    return true;
  }

  checkAttrValue(attrValue) {
    const maxAttrValue = 90;
    const minAttrValue = 0;
    if (attrValue > maxAttrValue || attrValue < minAttrValue) return false;
    return true;
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
      superTrunfoFilter,
    } = this.state;
    const rarities = ['todas', 'normal', 'raro', 'muito raro'];
    const currentCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.handleSaveButtonState();
    return (
      <div>
        <header><h1>Naruto Trunfo</h1></header>
        <section className="section__create-card">
          <Form
            { ...currentCard }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ this.isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleCardCreation }
          />
          <Card { ...currentCard } />
        </section>
        <section className="section__cards">
          <div className="toolbar__filter">
            <input
              type="text"
              data-testid="name-filter"
              onChange={ this.filterCardsByName }
              disabled={ superTrunfoFilter }
            />
            <select
              data-testid="rare-filter"
              onChange={ this.filterCardsByRarity }
              disabled={ superTrunfoFilter }
            >
              {rarities.map((rarity) => (
                <option key={ rarity } value={ rarity }>{rarity}</option>
              ))}
            </select>
            <label htmlFor="st-filter">
              Super Trunfo
              <input
                id="st-filter"
                type="checkbox"
                data-testid="trunfo-filter"
                onChange={ this.filterCardsBySuperTrunfo }
              />
            </label>
          </div>
          {filteredCards.map(
            (card, id) => (
              <div key={ id } className="cards__created">
                <Card { ...card } />
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
