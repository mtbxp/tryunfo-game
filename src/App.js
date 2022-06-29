import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Div from './components/Div';
// import array from './arrayOfHeroes';

class App extends React.Component {
  constructor() {
    super();
    this.buttonValidation = this.buttonValidation.bind(this);
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
      // filterTrunfo: false,
      // arrayOfCards: array,
      arrayOfCards: [],
      isFiltering: false,
      filteredArrayOfCards: [],
    };
  }

  hasTrunfo = (arrayTrocarDps) => arrayTrocarDps.some((card) => card.cardTrunfo === true);

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo, hasTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.hasTrunfo([...previous.arrayOfCards, newCard]),
      isSaveButtonDisabled: true,
      arrayOfCards: [...previous.arrayOfCards, newCard],
    }), () => {
    });
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.buttonValidation(target);
    });
  }

  buttonValidation = () => {
    const attrMax = 90;
    const max = 210;
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    const arrOfAttr = [cardAttr1, cardAttr2, cardAttr3].map((value) => value)
      .map((value) => parseFloat(value)).reduce((acc, curr) => acc + curr);

    if (cardName && cardDescription && cardImage && cardRare
       && arrOfAttr <= max && cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }

    if (cardAttr1 > attrMax || cardAttr2 > attrMax || cardAttr3 > attrMax) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  removeCard = ({ target }) => {
    const name = target.parentElement.getAttribute('name');
    const { arrayOfCards } = this.state;
    const newArrayOfCards = arrayOfCards.filter((card) => card.cardName !== name);
    this.setState({
      arrayOfCards: newArrayOfCards,
    });
    const checkbox = newArrayOfCards.some((card) => card.cardTrunfo);
    if (!checkbox) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  isCardTrunfoTrue = () => {
    const { cardTrunfo } = this.state;
    if (!cardTrunfo) {
      return null;
    }
    return <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>;
  }

  filterCards = ({ target }) => {
    const { value } = target;
    const { arrayOfCards } = this.state;
    this.setState({
      isFiltering: !!value,
    });
    const newArr = arrayOfCards.filter((card) => {
      const toLower = card.cardName.toLowerCase();
      const valueLower = value.toLowerCase();
      return toLower.includes(valueLower);
    });
    this.setState({
      filteredArrayOfCards: newArr,
    });
  }

  rareFilterCards = ({ target }) => {
    const { arrayOfCards } = this.state;
    const { value } = target;
    const rareArray = arrayOfCards.filter((card) => card.cardRare === value);
    this.setState({
      isFiltering: !!value,
      filteredArrayOfCards: rareArray,
    });
    if (value === 'todas') {
      this.setState({
        filteredArrayOfCards: arrayOfCards,
      });
    }
  }

  // filter = ({ target }) => {
  //   const { arrayOfCards } = this.state;
  //   if (target.checked) {
  //     console.log('entrou no if');
  //     this.setState({
  //       filterTrunfo: true,
  //       filteredArrayOfCards: arrayOfCards.filter((card) => card.cardTrunfo),
  //     });
  //   } else {
  //     console.log('entrou no else');
  //     this.setState({
  //       filterTrunfo: true,
  //       filteredArrayOfCards: arrayOfCards,
  //     });
  //   }
  // };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      arrayOfCards, filteredArrayOfCards, isFiltering } = this.state;

    return (
      <div className="App">
        <div className="Form-Card">
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
            onInputChange={ this.onInputChange }
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
        </div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ this.filterCards }
          placeholder="Filtre pelo nome"
        />
        <select onChange={ this.rareFilterCards } data-testid="rare-filter">
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        {/* <label onChange={ this.filter } htmlFor="checkbox-filter" testid="trunfo-filter">
          Super Trunfo
          <input id="checkbox-filter" type="checkbox" />
        </label> */}
        <Div
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          arrayOfCards={ isFiltering ? filteredArrayOfCards : arrayOfCards }
          removeCard={ this.removeCard }
        />
      </div>
    );
  }
}

export default App;
