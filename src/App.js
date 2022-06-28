import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // onSaveButtonClick: true,
      deckOfCards: [],
    };
  }

  resetForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  handleSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxAttr = 90;
    const minAttr = 0;
    const maxTotal = 210;
    const totalSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) >= minAttr && Number(cardAttr1) <= maxAttr
      && Number(cardAttr2) >= minAttr && Number(cardAttr2) <= maxAttr
      && Number(cardAttr3) >= minAttr && Number(cardAttr3) <= maxAttr
      && totalSum <= maxTotal
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
      this.setState(() => ({ [name]: value }), this.handleSaveButton);
    }

    handleClick = () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
      } = this.state;
      this.setState((cards) => ({
        deckOfCards: [...cards.deckOfCards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
      }), this.resetForm);
      if (cardTrunfo) {
        this.setState({ hasTrunfo: true });
      }
    }

    render() {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled,
        // onSaveButtonClick,
        deckOfCards,
      } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleClick }
            onInputChange={ this.handleChange }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            deckOfCards={ deckOfCards }
          />
        </div>
      );
    }
}

export default App;
