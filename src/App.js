import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

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
      superTrunfo: false,
      listOfCards: [],
      disabledByTrunfoFilter: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.checkMinMax = this.checkMinMax.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.validateSuperTrunfoPresence = this.validateSuperTrunfoPresence.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.filterName = this.filterName.bind(this);
    this.rarityFilter = this.rarityFilter.bind(this);
    this.superTrunfoFunc = this.superTrunfoFunc.bind(this);
  }

  handleSave(event) {
    event.preventDefault();
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    const newCard = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => ({
      listOfCards: [...prevState.listOfCards, newCard],
    }), () => this.validateSuperTrunfoPresence());
    this.resetFormAfterSaving();
  }

  handleChange({ target }) {
    const { name } = target;
    const valueState = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valueState,
    },
    () => this.finalCheck());
  }

  handleSaveButton(stateOfButton) {
    this.setState({
      isSaveButtonDisabled: stateOfButton,
    });
  }

  validateSuperTrunfoPresence() {
    const { listOfCards } = this.state;
    const anySuperTrunfo = listOfCards.some((element) => element.cardTrunfo);
    this.setState({
      hasTrunfo: anySuperTrunfo,
    });
  }

  resetFormAfterSaving() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  checkMinMax(attribute) {
    const min = 0;
    const max = 90;
    if (attribute < min || attribute > max || attribute.length === 0) {
      return true;
    }
    return false;
  }

  finalCheck() {
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const totalMax = 210;
    const totalMaxValidation = sum > totalMax;
    const array = [this.checkMinMax(cardAttr1),
      this.checkMinMax(cardAttr2),
      this.checkMinMax(cardAttr3),
      totalMaxValidation,
      cardName.length === 0,
      cardDescription.length === 0,
      cardImage.length === 0,
      cardRare.length === 0];
    const check = array.some((element) => element === true);
    this.handleSaveButton(check);
  }

  removeItem(name) {
    const { listOfCards } = this.state;
    const newDeck = listOfCards.filter((card) => card.cardName !== name);
    this.setState({
      listOfCards: newDeck,
    },
    () => this.validateSuperTrunfoPresence());
  }

  filterName({ target }) {
    const { listOfCards } = this.state;
    const filteredCardsByName = listOfCards
      .filter((card) => card.cardName.includes(target.value));
    this.setState({
      listOfCards: filteredCardsByName,
    });
  }

  rarityFilter({ target }) {
    const { value } = target;
    const { listOfCards } = this.state;
    const filteredCardsByRarity = listOfCards
      .filter((card) => card.cardRare === value);
    if (value !== 'todas') {
      this.setState({
        listOfCards: filteredCardsByRarity,
      });
    }
  }

  superTrunfoFunc({ target }) {
    const { listOfCards } = this.state;
    const filteredCardsByTrunfo = listOfCards
      .filter((card) => card.cardTrunfo === target.checked);
    this.setState({
      disabledByTrunfoFilter: target.checked,
      superTrunfo: target.checked,
      listOfCards: filteredCardsByTrunfo,
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
      isSaveButtonDisabled,
      listOfCards,
      superTrunfo,
      disabledByTrunfoFilter,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSave }
          filterName={ this.filterName }
          rarityFilter={ this.rarityFilter }
          superTrunfo={ superTrunfo }
          disabledByTrunfoFilter={ disabledByTrunfoFilter }
          superTrunfoFunc={ this.superTrunfoFunc }
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
          onInputChange={ this.handleChange }
        />
        <h1> CARTAS DO BARALHO </h1>
        <div className="deckOfCards">
          {
            listOfCards.map((card) => (
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
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeItem(card.cardName) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
