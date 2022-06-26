import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validate(),
    }));
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState((prevArray) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: true,
        saveCards: [...prevArray.saveCards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
      }));
    } else {
      this.setState((prevArray) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
        saveCards: [...prevArray.saveCards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
      }));
    }
  }

  validate() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const minValue = 0;
    const maxSumAttr = 211;

    if (cardAttr1 < minValue || cardAttr1 > maxValue
      || cardAttr2 < minValue || cardAttr2 > maxValue
      || cardAttr3 < minValue || cardAttr3 > maxValue
    ) return true;

    const sumAttr = (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3))
    < maxSumAttr;

    return !(cardName && cardDescription && cardImage && sumAttr);
  }

  btnClear(name) {
    const { hasTrunfo } = this.state;
    this.setState((prev) => ({
      saveCards: prev.saveCards.filter((card) => card.cardName !== name) }));
    if (hasTrunfo) {
      this.setState({ hasTrunfo: false });
    }
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
      saveCards,
    } = this.state;
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...{
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } }
        />
        {saveCards.map((card, index) => (
          <section key={ index } className="renderCards">
            <Card
              { ...card }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.btnClear(card.cardName) }
            >
              excluir
            </button>
          </section>))}
      </>
    );
  }
}

export default App;
