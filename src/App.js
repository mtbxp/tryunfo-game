import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.checkButtonValidation());
  }

  // Ver possibilidade de refatorar
  checkButtonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const [
      attr1,
      attr2,
      attr3,
    ] = [cardAttr1, cardAttr2, cardAttr3].map((attr) => parseInt(attr, 10));
    const maxAttr = 90;
    const minAttr = 0;
    const maxTotalAttr = 210;
    const validCardInfo = Boolean(cardName && cardDescription && cardImage);
    const validAttr = (
      (attr1 <= maxAttr && attr2 <= maxAttr && attr3 <= maxAttr)
      && (attr1 >= minAttr && attr2 >= minAttr && attr3 >= minAttr)
    );
    const validTotalAttr = attr1 + attr2 + attr3 <= maxTotalAttr;
    const validCard = validCardInfo && validAttr && validTotalAttr;
    this.setState({
      isSaveButtonDisabled: !validCard,
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((state) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: Boolean(cardTrunfo || state.hasTrunfo),
      savedCards: [...state.savedCards, newCard],
    }));
  }

  handleDeckButton = (cardName, cardTrunfo) => {
    const { savedCards } = this.state;
    const newDeck = savedCards.filter((card) => card.cardName !== cardName);
    this.setState((state) => ({
      hasTrunfo: cardTrunfo ? false : state.hasTrunfo,
      savedCards: newDeck,
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
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <Deck savedCards={ savedCards } handleDeckButton={ this.handleDeckButton } />
      </div>
    );
  }
}

export default App;
