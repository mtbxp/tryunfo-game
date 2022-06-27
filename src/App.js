import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsArray: [],
      hasTrunfo: false,
      nameFilter: '',
      rareFilter: '',
      trunfoFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyIsOver210 = this.verifyIsOver210.bind(this);
    this.verifyIsInvalid = this.verifyIsInvalid.bind(this);
    this.verifyIsEmpty = this.verifyIsEmpty.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.verifyHasTrunfo = this.verifyHasTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterName = this.filterName.bind(this);
  }

  handleSubmit() {
    const disable = [this.verifyIsEmpty(), this.verifyIsInvalid(), this.verifyIsOver210()]
      .some((verify) => verify === true);
    if (disable) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  onInputChange(event) {
    const { target } = event;
    const { name, value, checked } = target;
    const conditionalValue = target.type === 'checkbox' ? checked : value;
    this.setState({
      [name]: conditionalValue,
    }, () => this.handleSubmit());
  }

  onSaveButtonClick() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardName,
      cardsArray,
    } = this.state;

    const currentCard = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardName,
    };

    this.setState({
      cardsArray: [...cardsArray, currentCard],
    }, () => {
      this.resetInputs();
      return (
        this.verifyHasTrunfo()
      );
    });
  }

  deleteCard(event) {
    const { target } = event;
    const { cardsArray } = this.state;
    const targetCardName = target.parentElement.firstElementChild.innerHTML;
    const newCardsArray = cardsArray
      .filter((card) => card.cardName !== targetCardName);
    this.setState({
      cardsArray: newCardsArray,
    }, () => this.verifyHasTrunfo());
  }

  verifyHasTrunfo() {
    const { cardsArray } = this.state;
    this.setState({
      hasTrunfo: cardsArray.some((card) => card.cardTrunfo),
    });
  }

  resetInputs() {
    this.setState({
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardName: '',
    });
  }

  verifyIsOver210() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSum = 210;
    const sum = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)]
      .reduce((acc, current) => acc + current);
    return (
      sum > maxSum
    );
  }

  verifyIsInvalid() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxLenght = 90;
    const hasInvalid = [cardAttr1, cardAttr2, cardAttr3]
      .some((value) => value < 0 || value > maxLenght);
    return (
      hasInvalid
    );
  }

  verifyIsEmpty() {
    const { cardName, cardDescription, cardImage } = this.state;
    const isEmpty = [cardDescription.length, cardImage.length, cardName.length]
      .some((value) => value === 0);
    return (
      isEmpty
    );
  }

  filterName() {
    const { cardsArray, nameFilter, rareFilter, trunfoFilter } = this.state;
    const deleteButton = (
      <button
        data-testid="delete-button"
        type="button"
        onClick={ this.deleteCard }
      >
        Excluir
      </button>
    );

    const arrayByTrunfo = cardsArray.filter((card) => card.cardTrunfo);
    const arrayByName = cardsArray.filter((card) => card.cardName.includes(nameFilter));
    let arrayByRare = cardsArray.filter((card) => card.cardRare === rareFilter);
    if (rareFilter === 'todas') arrayByRare = cardsArray;
    const filteredArray = arrayByName.filter((card) => arrayByRare.includes(card));
    let conditionalCardsArray = cardsArray;
    if (nameFilter.length !== 0 && rareFilter.length === 0) {
      conditionalCardsArray = arrayByName;
    } else if (nameFilter.length === 0 && rareFilter.length !== 0) {
      conditionalCardsArray = arrayByRare;
    } else if (nameFilter.length !== 0 && rareFilter.length !== 0) {
      conditionalCardsArray = filteredArray;
    } else if (trunfoFilter) {
      conditionalCardsArray = arrayByTrunfo;
    }

    return (
      conditionalCardsArray.map((card, index) => (
        <Card
          { ...card }
          key={ index }
          deleteButton={ deleteButton }
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          { ...this.state }
        />
        { this.filterName() }
      </div>
    );
  }
}

export default App;
