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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      filterInput: '',
    };
  }

  onInputChange = (e) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (
          !this.isInputFilled()
          && !this.sumOfAttr()
          && !this.verifyAttr()
          && !this.verifyAttr2()
        ) {
          this.setState({
            isSaveButtonDisabled: false,
          });
        } else {
          this.setState({
            isSaveButtonDisabled: true,
          });
        }
      },
    );
  };

  isInputFilled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0
    ) {
      return false;
    }
    return true;
  };

  sumOfAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 210;
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > magic) {
      return true;
    }
    return false;
  };

  verifyAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 90;
    if (Number(cardAttr1) > magic
    || Number(cardAttr2) > magic || Number(cardAttr3) > magic) {
      return true;
    }
    return false;
  };

  verifyAttr2 = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 0;
    if (Number(cardAttr1) < magic || Number(cardAttr2) < magic
    || Number(cardAttr3) < magic) {
      return true;
    }
    return false;
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
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
    this.setState(
      (state) => ({
        cards: [newCard, ...state.cards],
      }),
      () => {
        this.setState(
          {
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'normal',
            cardTrunfo: false,
            isSaveButtonDisabled: true,
          },
          () => {
            if (cardTrunfo) {
              this.setState({
                hasTrunfo: true,
              });
            }
          },
        );
      },
    );
  };

  removeCard = ({ target }) => {
    const { cards } = this.state;
    const { name } = target;
    const card = cards.find((element) => element.cardName === name);
    if (card.cardTrunfo === true) {
      this.setState(
        {
          hasTrunfo: false,
        },
      );
    }
    this.setState((PreviousState) => ({
      cards: PreviousState.cards.filter(
        (element) => element.cardName !== name,
      ),
    }));
  };

  onFilterChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  exibirCards = (cartas) => {
    const cards = cartas.map((card) => (
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
        removeCard={ this.removeCard }
      />
    ));
    return cards;
  };

  render() {
    const {
      cardName, cardDescription, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      cards, cardAttr1, filterInput } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          removeCard={ this.removeCard }
          isPreview
        />
        <div>
          <h3>Todas as Cartas</h3>
          <p>Filtro de Busca</p>
          <input
            data-testid="name-filter"
            value={ filterInput }
            name="filterInput"
            onChange={ this.onFilterChange }
          />
          {filterInput === ''
            ? this.exibirCards(cards)
            : this.exibirCards(
              cards.filter((element) => element.cardName
                .toLowerCase()
                .includes(filterInput.toLowerCase())),
            )}
        </div>
      </div>
    );
  }
}

export default App;
