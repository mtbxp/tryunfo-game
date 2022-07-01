import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardDeck from './components/CardDeck';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      deleteCard: false,
      cards: [],
    };
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, cards, deleteCard,
    } = this.state;

    const handleChange = (event) => {
      const { name, type } = event.target;
      const value = type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState({
        [name]: value,
      });
    };

    const disableButton = () => {
      const nineZero = 90;
      const minAttr = -1;
      const maxAttr = 210;
      if (cardName.length > 0
  && cardDescription.length > 0
  && cardAttr1 <= nineZero
  && cardAttr1 > minAttr
  && cardAttr2 <= nineZero
  && cardAttr2 > minAttr
  && cardAttr3 <= nineZero
  && cardAttr3 > minAttr
  && cardImage.length > 0
  && Math.round(cardAttr1) + Math.round(cardAttr2) + Math.round(cardAttr3) <= maxAttr
      ) {
        return false;
      }
      return true;
    };

    const onSaveButtonClick = () => {
      const newCard = { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        deleteCard,
        cardTrunfo,
      };
      this.setState((prevState) => ({
        cards: [...prevState.cards, newCard],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
      }));
      console.log(cardTrunfo);
    };

    const deleteCards = (e) => {
      this.setState((prevState) => ({
        cards: prevState.cards.filter((item) => (item.cardName !== e.target.name)),
      }));
    };

    console.log(cards.map((item) => item.cardTrunfo));

    return (
      <div>
        <h1>Tryunfo!!!</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ handleChange }
          isSaveButtonDisabled={ disableButton() }
          onSaveButtonClick={ onSaveButtonClick }
          hasTrunfo={ cards.some((item) => item.cardTrunfo) }
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
        <CardDeck
          cards={ cards }
          button={ deleteCards }
        />
      </div>
    );
  }
}

export default App;
