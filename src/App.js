/* eslint-disable max-lines */
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: 'f',
      isSaveButtonDisabled: true,
      savedCards: [],
      filterName: '',
      filterRare: 'todas',
    };
  }

  verifyingInputs = (estadoAnterior) => {
    const stateValues = Object.values(estadoAnterior);
    const arrayValues = [
      stateValues[0],
      stateValues[1],
      stateValues[2],
      stateValues[3],
      stateValues[4],
      stateValues[5],
      stateValues[6],
    ];
    const valuesFilter = arrayValues.filter((element) => element === '');
    const attr1 = parseInt(stateValues[2], 10);
    const attr2 = parseInt(stateValues[3], 10);
    const attr3 = parseInt(stateValues[4], 10);
    const sum = parseInt(stateValues[2], 10)
    + parseInt(stateValues[3], 10)
    + parseInt(stateValues[4], 10);
    const maxValueSumAttr = 210;
    const maxValueAttr = 90;
    const minValueAttr = 0;
    if (valuesFilter.length === 0
      && sum <= maxValueSumAttr
      && attr1 <= maxValueAttr
      && attr2 <= maxValueAttr
      && attr3 <= maxValueAttr
      && attr1 >= minValueAttr
      && attr2 >= minValueAttr
      && attr3 >= minValueAttr
    ) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const propValue = () => {
      if (name === 'cardAttr1' || name === 'cardAttr2' || name === 'cardAttr3') {
        value = parseInt(target.value, 10);
        return value;
      }
      return value;
    };
    this.setState({
      [name]: propValue(),
    });
    this.setState((estadoAnterior) => ({
      isSaveButtonDisabled: this.verifyingInputs(estadoAnterior),
    }));
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;

    this.setState({
      savedCards: [...savedCards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: 't',
      });
    }
  }

  removeCard = ({ target }) => {
    const { savedCards } = this.state;
    const excludingSavedCards = savedCards
      .filter((__card, index) => index !== parseInt(target.name, 10));
    const filteringTrunfo = excludingSavedCards
      .filter((card) => card.cardTrunfo === 'true');
    if (filteringTrunfo.length >= 1) {
      this.setState({
        savedCards: excludingSavedCards,
      });
    }
    this.setState({
      savedCards: excludingSavedCards,
      hasTrunfo: 'f',
    });
  }

  createCards = (card, index) => (
    <li
      key={ index }
      className="cardsList"
    >
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
        name={ index }
        type="button"
        data-testid="delete-button"
        onClick={ this.removeCard }
      >
        Excluir
      </button>
    </li>
  )

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
      isSaveButtonDisabled,
      hasTrunfo,
      savedCards,
      filterName,
      filterRare,
    } = this.state;
    return (
      <div className="container">
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
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
        <ul className="allCardsList">
          <h4>Todas as cartas</h4>
          <div className="filtersContainer">
            <p>Filtros de busca</p>
            <input
              name="filterName"
              type="text"
              data-testid="name-filter"
              placeholder="Nome da carta"
              value={ filterName }
              onChange={ this.onInputChange }
            />
            <select
              data-testid="rare-filter"
              value={ filterRare }
              onChange={ this.onInputChange }
              name="filterRare"
              placeholder="Selecione a raridade"
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <label htmlFor="trunfoInputFilter" className="checkboxLabel">
              Super Trunfo
              <input type="checkbox" id="trunfoInputFilter" />
            </label>
          </div>

          {
            filterRare === 'todas'
              ? savedCards
                .filter((card) => card.cardName.includes(filterName))
                .map((card, index) => this.createCards(card, index))
              : savedCards
                .filter((card) => card.cardName.includes(filterName))
                .filter((card) => card.cardRare === filterRare)
                .map((card, index) => this.createCards(card, index))
          }
        </ul>
      </div>
    );
  }
}

export default App;
