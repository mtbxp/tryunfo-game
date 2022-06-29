import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.saveButton = this.saveButton.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: '',
      isSaveButtonDisabled: true,

      savedCard: [{ cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: '' }],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = name === 'cardTrunfo' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  saveButton(card) {
    console.log(card);
    this.setState((previous) => ({
      savedCard: [...previous.savedCard, card],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    }));
  }

  validateButton() {
    const { cardName,
      cardDescription,
      cardImage, cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const totalSum = 210;
    const limitInd = 90;
    const arrayNumb = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const soma = arrayNumb.reduce((acc, curr) => acc + curr, 0);

    const individualLimit = arrayNumb
      .every((element) => element >= 0 && element <= limitInd);

    if (
      cardName
      && cardImage
      && cardDescription
      && cardRare
      && individualLimit === true
      && soma <= totalSum) {
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
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      // hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ Number(cardAttr1) }
          cardAttr2={ Number(cardAttr2) }
          cardAttr3={ Number(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveButton }
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
    );
  }
}

export default App;
