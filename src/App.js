import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
      cardsArray: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyIsOver210 = this.verifyIsOver210.bind(this);
    this.verifyIsInvalid = this.verifyIsInvalid.bind(this);
    this.verifyIsEmpty = this.verifyIsEmpty.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  handleSubmit() {
    const disable = [this.verifyIsEmpty(), this.verifyIsInvalid(), this.verifyIsOver210()]
      .some((verify) => verify === true);
    if (disable) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  onInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.handleSubmit());
  }

  onSaveButtonClick() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardName,
      cardsArray,
    } = this.state;

    const currentCard = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardName,
    };

    this.setState({
      cardsArray: [...cardsArray, currentCard],
    }, () => this.resetInputs());
  }

  resetInputs() {
    this.setState({
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardName: '',
    });
  }

  verifyIsOver210() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSum = 210;
    const sum = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)]
      .reduce((acc, current) => acc + current);
    return (
      sum > maxSum
    );
  }

  verifyIsInvalid() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxLenght = 90;
    const hasInvalid = [cardAttr1, cardAttr2, cardAttr3]
      .some((value) => value < 0 || value > maxLenght);
    return (
      hasInvalid
    );
  }

  verifyIsEmpty() {
    const { cardName, cardDescription, cardImage } = this.state;
    const isEmpty = [cardDescription.length, cardImage.length, cardName.length]
      .some((value) => value === 0);
    return (
      isEmpty
    );
  }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
