import React from 'react';
import Card from './Card';
import Form from './Form';

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
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };
  }

  trunfoInCards = () => {
    const { Savecards } = this.state;
    if (Savecards.length === 0) return Savecards.some((card) => card.trunfo);
    return false;
  }

    validationButton = () => {
      const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
        cardAttr3 } = this.state;

      const maxAttr = 90;
      const minAttr = 0;
      const maxSumAttr = 120;

      const empty = cardName && cardDescription && cardImage !== '';

      const sumAttr = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3) <= maxSumAttr;

      const maxValidationAttr = Number(cardAttr1) <= maxAttr
      && Number(cardAttr2) <= maxAttr
      && Number(cardAttr3) <= maxSumAttr;

      const minValidationAttr = Number(cardAttr1) >= minAttr
      && Number(cardAttr2) >= minAttr
      && Number(cardAttr3) >= minAttr;

      if (empty && sumAttr && maxValidationAttr && minValidationAttr) {
        return false;
      }
      return true;
    };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => this.setState({
      isSaveButtonDisabled: this.validationButton(),
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;

    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      saveCards: [...prev.saveCards,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }],
    }),
    () => this.setState({ hasTrunfo: this.trunfoInCards() }));
  }

  deleteButtonClick = (cards) => {
    this.setState((prev) => ({
      saveCards: prev.saveCards.filter((card) => card.cardName !== cards),
    }),
    () => this.setState({ hasTrunfo: this.trunfoInCards() }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <section>
        <h1>Tryunfo</h1>
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
          onInputChange={ this.onInputChange }
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
          deleteButtonClick={ this.deleteButtonClick }
          preview={ false }
        />
      </section>
    );
  }
}

export default App;