import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cardId: 0,
      cards: [],
    };
  }

  handleChange = ({ target }) => {
    const { value, name, checked } = target;

    this.setState({
      [name]: name === 'cardTrunfo' ? checked : value,
    });
  }

  handleCheckTrunfo() {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo }) => cardTrunfo === true);
  }

  verifyHandle = (array1) => {
    const verify = array1.every((cardInfo) => cardInfo.length > 0);
    return verify;
  }

  sumHandle = (array2) => {
    const number90 = 90;
    const attrLimit = 210;
    const sum = array2.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr), 0);
    const maxNum = array2.some((attrInfo) => parseFloat(attrInfo) > number90);
    const minNum = array2.some((attrInfo) => parseFloat(attrInfo) < 0);
    return sum <= attrLimit && !maxNum && !minNum;
  }

  handleVerifySave = () => {
    const info = this.state;
    const number3 = 3;
    const number4 = 4;
    const number7 = 7;
    const values = Object.values(info);
    const fInfo = values.slice(0, number3);
    const attr = values.slice(number4, number7);
    if (this.verifyHandle(fInfo) && this.sumHandle(attr)) {
      return false;
    }
    return true;
  }

  handleSave = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardId,
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
      cardId,
    };

    this.setState((preState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardId: preState.cardId + 1,
      cards: [...preState.cards, newCard],
    }));
  }

  handleDelet = (event) => {
    const getInfo = event.target.value;
    this.setState((preState) => ({
      cards: [...preState.cards.filter(({ cardId }) => cardId !== parseInt(getInfo, 10))],
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
      cards,
    } = this.state;

    return (
      <div>
        <Header />
        <section className="createCard">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ this.handleCheckTrunfo() }
            isSaveButtonDisabled={ this.handleVerifySave() }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleSave }
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
        </section>
        <section className="cardsSection">
          {
            cards.map((getCard, index) => (
              <article key={ index }>
                <Card
                  key={ index }
                  cardName={ getCard.cardName }
                  cardDescription={ getCard.cardDescription }
                  cardAttr1={ getCard.cardAttr1 }
                  cardAttr2={ getCard.cardAttr2 }
                  cardAttr3={ getCard.cardAttr3 }
                  cardImage={ getCard.cardImage }
                  cardRare={ getCard.cardRare }
                  cardTrunfo={ getCard.cardTrunfo }
                />
                <button
                  value={ getCard.cardId }
                  type="button"
                  data-testid="delete-button"
                  onClick={ this.handleDelet }
                >
                  Apagar Carta
                </button>
              </article>))
          }
        </section>
      </div>
    );
  }
}

export default App;
