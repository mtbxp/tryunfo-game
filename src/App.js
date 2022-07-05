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
      cards: [],
      // isSaveButtonDisabled: true,
    };
  }

  onInputChange = (e) => {
    const { name } = e.target;
    const batatinha = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: batatinha,
    });
  }

disableButton = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
  } = this.state;

  const minAttr = 0;
  const maxAttr = 90;
  const max = 210;

  const soma = (Math.round(cardAttr1)
    + Math.round(cardAttr2) + Math.round(cardAttr3)) <= max;

  const maxInput = Math.round(cardAttr1) <= maxAttr
  && Math.round(cardAttr2) <= maxAttr
  && Math.round(cardAttr3) <= maxAttr;

  const minInput = Math.round(cardAttr1) >= minAttr
  && Math.round(cardAttr2) >= minAttr
  && Math.round(cardAttr3) >= minAttr;

  if (cardName.length > 0 && cardImage.length > 0 && cardDescription.length > 0
    && soma && maxInput && minInput) {
    return false;
  }
  return true;
}

onSaveButtonClick = (event) => {
  const defaultCards = this.state;

  event.preventDefault();
  this.setState((prevState) => ({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cards: [...prevState.cards, defaultCards],
  }), () => this.hasTrunfo());
}

hasTrunfo = () => {
  const { cards } = this.state;
  const verifyCard = cards.some((card) => card.cardTrunfo === true);
  this.setState({
    hasTrunfo: verifyCard,
  });
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
    cards,
  } = this.state;

  return (
    <>
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
        isSaveButtonDisabled={ this.disableButton() }
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
      />
      <div>
        {
          cards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </div>
    </>
  );
}
}

export default App;
