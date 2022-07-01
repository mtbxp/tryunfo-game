import React from 'react';
import Form from './components/Form';
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
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      deckOfCards: [],
    };
  }

  // ============================================

  isSaveButtonDisabled = () => {

  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;
    const cardObj = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };
    this.setState((prevSate) => ({
      deckOfCards: [...prevSate.deckOfCards, cardObj],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => this.checkSuperTrunfo());
  }

  validateForm = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const minRoll = 0;
    const maxRoll = 90;
    const maxPoints = 210;
    let condText = true;
    let condNum = false;
    let condSum = true;

    if (!cardName.length || !cardDescription.length || !cardImage.length) {
      condText = false;
    }
    // if de não ser menor que 0 e não ser maior que 90
    if (Number(cardAttr1) >= minRoll && Number(cardAttr1) <= maxRoll
    && Number(cardAttr2) >= minRoll && Number(cardAttr2) <= maxRoll
    && Number(cardAttr3) >= minRoll && Number(cardAttr3) <= maxRoll) {
      condNum = true;
    }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxPoints) {
      condSum = false;
    }
    if (condText && condNum && condSum) {
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }),
      () => this.validateForm());
  }

  checkSuperTrunfo = () => {
    const { deckOfCards } = this.state;
    this.setState({
      hasTrunfo: (deckOfCards.some((e) => e.cardTrunfo)),
    });
  }

  deleteCard = (e) => {
    const { deckOfCards, hasTrunfo, cardTrunfo } = this.state;
    // console.log(e);
    if (hasTrunfo === true) {
      this.setState({
        hasTrunfo: false,
        cardTrunfo: false,
      });
    }
    this.setState({
      deckOfCards: deckOfCards.filter((card) => card.cardName !== e),
    });
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      deckOfCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        <div className="deckContainer">
          <h1>Deck</h1>
          <div>
            {
              deckOfCards.map((card, index) => (
                <div key={ index }>
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
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteCard(card.cardName) }
                  >
                    Excluir
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
