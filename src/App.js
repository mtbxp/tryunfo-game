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
      isSaveButtonDisabled: false,
      onInputChange: this.handleInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }
  // It gets the target of a a change on its value, if th target is a checkbox
  // it changes the state with the value .checked (checkbox), if not it gets the target`s .value(input case)

  handleInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.setState({
      isSaveButtonDisabled: this.validateInputs,
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
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
      hasTrunfo: false,
      cardDeck: [savedCard, ...previousDeck.cardDeck],
    }));
  }
  /* validateInputs = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    const texts = [cardName, cardDescription, cardImage, cardRare];
    const numbers = [cardAttr1, cardAttr2, cardAttr3];

    const checkTextInputs = texts.every((text) => text.length > 0);
    const maxAtrrSum = 210;
    const maxSingleAtrr = 90;

    const checkMaxSumAtrr = numbers
      .reduce((acc, curr) => acc + Number(curr), 0) <= maxAtrrSum;
    const checkMinSumAtrr = numbers.every((atrr) => atrr > 0 && atrr <= maxSingleAtrr);
    const resultsArry = [checkMaxSumAtrr, checkMinSumAtrr, checkTextInputs];

    return !(resultsArry.every((result) => result === true));
  } */

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
