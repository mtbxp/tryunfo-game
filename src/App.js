import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      buttonDisabled: true,
      cards: [],

    };
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,

    } = this.state;

    const maxSum = 210;
    const maxIndiv = 90;
    const min = 0;

    const maxValue = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;
    const minInput = cardAttr1 >= min && cardAttr2 >= min && cardAttr3 >= min;
    const validateValue = cardName !== '' && cardDescription !== '' && cardImage !== '';
    const maxInput = cardAttr1 <= maxIndiv
    && cardAttr2 <= maxIndiv
    && cardAttr3 <= maxIndiv;

    // console.log(maxValue);
    // console.log(minInput);
    // console.log(validateValue);
    // console.log(maxInput);

    if (validateValue && minInput && maxInput && maxValue) {
      return false;
    } return true;
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => this.setState({ buttonDisabled: this.validateButton() }));
  }

  saveButtonClick = () => {
    // event.preventDefalt();

    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo,
    };

    this.setState((prev) => ({ cards: [newCard, ...prev.cards] }), () => this.clearAll());
  };

  clearAll() {
    const { cards } = this.state;
    const validateTrunfo = cards.some(({ cardTrunfo }) => cardTrunfo === true);
    console.log(validateTrunfo);

    // if (validateTrunfo === true) {
    return this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: validateTrunfo,

    });
    // // }
    // return this.setState({
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '0',
    //   cardAttr2: '0',
    //   cardAttr3: '0',
    //   cardImage: '',
    //   cardRare: 'normal',
    //   cardTrunfo: false,
    //   hasTrunfo: false,

    // });
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
      hasTrunfo,
      cardTrunfo,
      buttonDisabled,
      cards,

    } = this.state;
    // console.log(cardName);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ buttonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveButtonClick }
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

        { cards.map((card) => (
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            key={ card.cardName }
          />

        ))}

      </div>
    );
  }
}

export default App;
