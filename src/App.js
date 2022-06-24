import React from 'react';
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
    };

    this.isSaveButtonDisabled = true;

    this.handleChange = this.handleChange.bind(this);
    this.checkRequiredFields = this.checkRequiredFields.bind(this);
    this.checkAttrsSum = this.checkAttrsSum.bind(this);
    this.handleCardCreation = this.handleCardCreation.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    if (type === 'checkbox') {
      const { checked } = target;
      this.setState({
        [name]: checked,
      });
    } else {
      const { value } = target;
      this.setState({
        [name]: value,
      });
    }
  }

  handleCardCreation(event) {
    event.preventDefault();
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
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
    this.setState((previous) => ({ cards: [...previous.cards, newCard] }));
    this.setState({
      cardName: '',
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
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const attrSum = this.checkAttrsSum(cardAttr1, cardAttr2, cardAttr3);
    const attr1Value = this.checkAttrValue(parseInt(cardAttr1, 10));
    const attr2Value = this.checkAttrValue(parseInt(cardAttr2, 10));
    const attr3Value = this.checkAttrValue(parseInt(cardAttr3, 10));
    const requiredFields = this.checkRequiredFields(cardName,
      cardDescription,
      cardImage,
      cardRare);

    const validations = [attrSum, attr1Value, attr2Value, attr3Value, requiredFields];
    const isValid = validations.every((validation) => validation);
    if (isValid) {
      this.isSaveButtonDisabled = false;
    } else {
      this.isSaveButtonDisabled = true;
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

  checkRequiredFields(cardName, cardDescription, cardImage, cardRare) {
    let returnedValue = true;
    if (cardName.length === 0) {
      returnedValue = false;
    }
    if (cardDescription.length === 0) {
      returnedValue = false;
    }
    if (cardImage.length === 0) {
      returnedValue = false;
    }
    if (cardRare.length === 0) {
      returnedValue = false;
    }
    return returnedValue;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    this.handleSaveButtonState();

    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
