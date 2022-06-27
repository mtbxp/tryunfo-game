import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.renderDeck = this.renderDeck.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      nameFilter: '',
      rareFilter: '',
    };
  }

  handleInput({ target }) {
    const { name, value, type, checked } = target;
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, this.enableSaveBtn);
  }

  validatesTextInput() {
    const { cardName, cardDescription,
      cardImage, cardRare } = this.state;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    ) {
      return true;
    }
  }

  validatesAttrInput() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttribute = 90;
    const maxAttributeSum = 210;
    const attrSum = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10);
    if (cardAttr1 <= maxAttribute && cardAttr1 >= 0
      && cardAttr2 <= maxAttribute && cardAttr2 >= 0
      && cardAttr3 <= maxAttribute && cardAttr3 >= 0
      && attrSum <= maxAttributeSum) {
      return true;
    }
  }

  enableSaveBtn() {
    if (this.validatesTextInput() && this.validatesAttrInput()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  createNewCard() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    };
  }

  resetInputs() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
    }, this.verifyTrunfoExistence);
  }

  saveCard() {
    const { deck } = this.state;
    this.setState({
      deck: [...deck, this.createNewCard()],
    }, this.resetInputs);
  }

  verifyTrunfoExistence() {
    const { deck } = this.state;
    if (deck.length === 0) {
      this.setState({
        hasTrunfo: false,
      });
    }
    deck.forEach((card) => {
      if (card.cardTrunfo === true) {
        this.setState({
          hasTrunfo: true,
        });
      } else {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
    this.enableSaveBtn();
  }

  removeCard(index) {
    const { deck } = this.state;
    this.setState(deck.splice(index, 1), this.verifyTrunfoExistence);
  }

  filterByRarity(rareFilter, card) {
    if (rareFilter === '' || rareFilter === 'todas') return true;
    return card.cardRare === rareFilter;
  }

  renderDeck() {
    const { deck, nameFilter, rareFilter } = this.state;
    return deck
      .filter((card) => this.filterByRarity(rareFilter, card))
      .filter((card) => card.cardName.includes(nameFilter))
      .map((card, index) => (
        <div className="deck-card" key={ card.cardName }>
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
            onClick={ () => this.removeCard(index) }
          >
            Remover
          </button>
        </div>
      ));
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, hasTrunfo, cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="new-card-container">
          <h2>Criar Carta</h2>
          <div className="new-card-inputs">
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
              onInputChange={ this.handleInput }
              onSaveButtonClick={ this.saveCard }
            />
          </div>
          <h2>Preview Carta</h2>
          <div className="new-card-preview">
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
        </section>
        <section className="deck-container">
          <h2>Deck</h2>
          <label htmlFor="search-name-filter">
            Fitlro de Busca
            <input
              name="nameFilter"
              type="text"
              data-testid="name-filter"
              onChange={ this.handleInput }
              placeholder="Nome da carta"
            />
          </label>
          <label htmlFor="rarity">
            <select
              name="rareFilter"
              data-testid="rare-filter"
              // id="rarity"
              // value={ cardRare }
              onChange={ this.handleInput }
            >
              <option value="todas"> todas </option>
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          {this.renderDeck()}
        </section>
      </div>
    );
  }
}

export default App;
