// Project <Tryunfo> from <Larissa Menezes> done in 22.06.24 for the Trybe course, 11th week. It has been used as reference the notes from the class an external links indicated along the code line

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
      cardRare: 'normal',
      cardTrunfo: true,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    this.setState({ [name]: value });
    const maxSumAtt = 210;
    const maxAtt = 90;
    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSumAtt
      && Number(cardAttr1) <= maxAtt && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxAtt && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxAtt && Number(cardAttr3) >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, myCards } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    if (!myCards.every((card) => card.Trunfo === false)) {
      this.setState((estadoAnterior) => ({
        myCards: [newCard, ...estadoAnterior],
      }), () => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardRare: 'normal',
      }));
    }
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  listCards = () => {
    const { myCards } = this.state;
    return myCards.map((card) => (
      <li key={ cardName }>
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
        <button
          type="button"
          onClick={ this.deleteCard(card.cardName, card.cardTrunfo) }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </li>
    ));
  }

  deleteCard = (cardName, cardTrunfo) => {
    const { myCards: lastCards } = this.state;
    this.setState({ myCards: lastCards.filter((card) => card.cardName !== cardName) });
    if (cardTrunfo) this.setState(() => ({ hasTrunfo: false }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <header>Add new card</header>
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
        />
        <ul>
          All the cards:
          { this.listCards }
        </ul>
      </div>
    );
  }
}

export default App;
