import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

// Hello World!
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
      cards: [],
    };
  }

  showButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const value = 210;
    const max = 90;
    const min = 0;

    if (((
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
    ) && ((
      Math.floor(cardAttr1)
    + Math.floor(cardAttr2)
    + Math.floor(cardAttr3)) <= value
    ) && (
      Math.floor(cardAttr1) <= max
    && Math.floor(cardAttr2) <= max
    && Math.floor(cardAttr3) <= max
    ) && (
      Math.floor(cardAttr1) >= min
    && Math.floor(cardAttr2) >= min
    && Math.floor(cardAttr3) >= min
    ))) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = (type !== 'checkbox')
      ? target.value : target.checked;
    this.setState(({
      [name]: value,
    }), this.showButton);
  }

  hasTrun = () => {
    const { cards } = this.state;

    const response = cards.find((card) => card.cardTrunfo === true);

    console.log(response);

    if (response !== undefined) {
      this.setState({ hasTrunfo: true });
    } else this.setState({ hasTrunfo: false });
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

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((previous) => ({
      cards: [...previous.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), this.hasTrun);
  }

  removeCard = ({ target }) => {
    const { cards } = this.state;
    const { name } = target;

    const newCards = cards.filter((card) => card.cardName !== name);

    this.setState({
      cards: newCards,
    }, this.hasTrun);
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
      cards,
    } = this.state;
    return (
      <>
        <header>
          <h1>Trunfo Capas do PLAY 2:</h1>
        </header>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            onInputChange={ this.onInputChange }
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
        </main>
        <ul>
          {
            cards.map((card, index) => (
              <div key={ index }>
                <li>
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
                <button
                  type="button"
                  data-testid="delete-button"
                  name={ card.cardName }
                  onClick={ this.removeCard }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </ul>
      </>
    );
  }
}

export default App;
