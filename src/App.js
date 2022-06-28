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
      trunfoDeck: [],
    };
  }

  trunfoDeckHasTrunfo = () => {
    const { trunfoDeck } = this.state;
    if (trunfoDeck.length !== 0) {
      return trunfoDeck.some(({ cardTrunfo }) => cardTrunfo);
    }
    return false;
  }

  deleteCard = (deletedCard) => {
    const { trunfoDeck } = this.state;
    const cards = trunfoDeck.filter((card) => card.cardName !== deletedCard);
    this.setState({
      trunfoDeck: cards,
    },
    () => this.setState({
      trunfoDeckHasTrunfo: this.trunfoDeckHasTrunfo(),
    }));
  };

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
      hasTrunfo,
    } = this.state;
    this.setState(({ trunfoDeck: prevDeck }) => ({
      trunfoDeck: [...prevDeck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
      }],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.trunfoDeckHasTrunfo(),
    }));
  };

  validationForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxSumAttribute = 210;
    const maxAttribute = 90;
    const minAttribute = 0;
    const sumAttribute = (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)) <= maxSumAttribute;
    if (cardAttr1 >= maxAttribute || cardAttr1 <= minAttribute
      || cardAttr2 >= maxAttribute || cardAttr2 <= minAttribute
      || cardAttr3 >= maxAttribute || cardAttr3 <= minAttribute) return true;

    return !(sumAttribute
      && cardDescription
      && cardName
      && cardImage
      && cardRare);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validationForm(),
    }));
  };

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
      trunfoDeck,
    } = this.state;
    return (
      <section>
        <h1>Tryunfo</h1>
        <div>
          <Form
            { ...this.state }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div>
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
        </div>
        <div>
          {
            trunfoDeck.map((card) => (
              <div key={ card.cardName }>
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
                  type="submit"
                  data-testid="delete-button"
                  onClick={ () => this.deleteCard(card.cardName) }
                >
                  Excluir
                </button>
              </div>))
          }
        </div>
      </section>
    );
  }
}

export default App;
