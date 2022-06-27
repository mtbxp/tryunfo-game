import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
    };

    this.onChange = this.onChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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
      hasTrunfo } = this.state;
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
        />
      </div>
    );
  }
}

export default App;
