import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Deck from './components/inputsOfForm/Deck';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardInfo: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      cardImage: '',
      cardRarity: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      filterName: '',
      filterRarity: '',
      filterSuperTrunfo: false,
      isSearchDisabledValue: false };

    this.onChange = this.onChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    const { cardName,
      cardInfo,
      attr1,
      attr2,
      attr3,
      cardImage,
      cardRarity,
      cardTrunfo,
      cards } = this.state;
    const objectCard = {
      cardName,
      cardInfo,
      attr1,
      attr2,
      attr3,
      cardImage,
      cardRarity,
      cardTrunfo,
    };
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    cards.push(objectCard);
    this.setState({
      cardName: '',
      cardInfo: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      cardImage: '',
      cardRarity: 'normal',
      cardTrunfo: false,
    });
  }

  onRemoveButtonClick({ target }) {
    const { cards, hasTrunfo } = this.state;
    const { value } = target;
    const valueInt = parseInt(value, 10);
    const newArrayCards = cards.filter((_, index) => index !== valueInt);
    this.setState({ cards: newArrayCards });
    if (hasTrunfo) this.setState({ hasTrunfo: false });
  }

  isAttrValidated(total, attrs) {
    const totalAttrMax = 210;
    const attrMax = 90;
    const attr1 = parseInt(attrs[0], 10);
    const attr2 = parseInt(attrs[1], 10);
    const attr3 = parseInt(attrs[2], 10);
    if (total > totalAttrMax) return true;
    if (attr1 > attrMax || attr1 < 0) return true;
    if (attr2 > attrMax || attr2 < 0) return true;
    if (attr3 > attrMax || attr3 < 0) return true;
    return false;
  }

  isSaveButtonDisabled() {
    const { attr1, attr2, attr3 } = this.state;
    const valuesStates = Object.values(this.state);
    const lastKey = 7;
    const totalAttr = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const isFormFilled = valuesStates.every((value, key) => {
      if (key < lastKey) return value;
      return true;
    });
    if (this.isAttrValidated(totalAttr, [attr1, attr2, attr3])) return true;

    return !isFormFilled;
  }

  render() {
    const { cardName,
      cardInfo,
      attr1,
      attr2,
      attr3,
      cardImage,
      cardRarity,
      cardTrunfo,
      hasTrunfo,
      cards,
      filterName,
      filterRarity,
      filterSuperTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onInputChange={ this.onChange }
          cardDescription={ cardInfo }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ cardImage }
          cardRare={ cardRarity }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardInfo }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ cardImage }
          cardRare={ cardRarity }
          cardTrunfo={ cardTrunfo }
          removeCard={ this.onRemoveButtonClick }
          value={ 100 }
        />

        <Deck
          valueFilterName={ filterName }
          valueFilterRarity={ filterRarity }
          valueFilterSuperTrunfo={ filterSuperTrunfo }
          onInputChange={ this.onChange }
        />
        <div className="divDeck">
          {(cards.filter((card) => {
            if (filterSuperTrunfo) {
              return card.cardTrunfo;
            }
            return true;
          })).filter((card) => {
            if (filterRarity === '') {
              return true;
            }
            return card.cardRarity === filterRarity;
          }).filter((card) => (
            card.cardName.includes(filterName)
          )).map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardInfo }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRarity }
              cardTrunfo={ card.cardTrunfo }
              removeCard={ this.onRemoveButtonClick }
              value={ index }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
