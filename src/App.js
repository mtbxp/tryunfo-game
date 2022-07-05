import React from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import Card from './components/Card';

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
      cardDeck: [],
      isSaveButtonDisabled: true,
      onInputChange: this.handleInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  validateInputs = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    const numbersArry = [cardAttr1, cardAttr2, cardAttr3];
    const textsArry = [cardName, cardDescription, cardImage, cardRare];

    const maxTotalSum = 210;
    const maxSingleAtrr = 90;

    const checkIfEmpty = textsArry.every((txt) => txt.length > 0);
    const minValue = numbersArry.every((atrr) => atrr >= 0 && atrr <= maxSingleAtrr);
    const sum = numbersArry.reduce((acc, curr) => acc + Number(curr), 0) <= maxTotalSum;

    return ![checkIfEmpty, sum, minValue].every((result) => result === true);
  }

  // It gets the target of a a change on its value, if th target is a checkbox
  // it changes the state with the value .checked (checkbox), if not it gets the target`s .value(input case)
  handleInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isSaveButtonDisabled: this.validateInputs(),
      });
    });
  }

  verifyTrunfoInDeck = () => {
    const { cardDeck } = this.state;
    this.setState({
      hasTrunfo: cardDeck.some((card) => card.cardTrunfo === true),
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const savedCard = this.state;
    this.setState((previousDeck) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardDeck: [savedCard, ...previousDeck.cardDeck],
    }));
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
      isSaveButtonDisabled,
      cardDeck,
      onInputChange,
      onSaveButtonClick,
    } = this.state;
    return (
      <div>
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
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
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
        <CardList cardDeck={ cardDeck } />
      </div>

    );
  }
}

export default App;
