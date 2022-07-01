import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedcard: [],

    };
  }

  onSaveButtonClick = () => {
    const { savedcard,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState({
      savedcard: [...savedcard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: 'false',
    });
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const maxValue = 90;
    const sumValue = 210;

    const sum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= sumValue;

    const verifyInput = cardName !== ''
    && cardDescription !== ''
    && cardImage !== '';

    const min = Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0;

    const max = Number(cardAttr1) <= maxValue
    && Number(cardAttr2) <= maxValue
    && Number(cardAttr3) <= maxValue;
    if (verifyInput && min && max && sum) {
      return false;
    }
    return true;
  }

  onInputChange =({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value },
      () => this.setState({ isSaveButtonDisabled: this.enableButton() }));
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
      savedcard,
    } = this.state;
    return (
      <>
        <Form
          onInputChange={ this.onInputChange }
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
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <ul>
          {savedcard.map((card) => (
            <li key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </li>
          ))}
        </ul>
      </>

    );
  }
}

export default App;
