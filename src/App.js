import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      filterPerName: '',
    };
  }

  hasTrunfo = () => {
    const { savedCards } = this.state;
    return savedCards.some((card) => card.cardTrunfo);
  };

  deleteCard = (deletedCard) => {
    const { savedCards } = this.state;
    const cards = savedCards.filter((card) => card.cardName !== deletedCard);
    this.setState({
      savedCards: cards,
    },
    () => this.setState({
      hasTrunfo: this.hasTrunfo(),
    }));
  };

  validateButtonSave = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const at1 = Number(cardAttr1);
    const at2 = Number(cardAttr2);
    const at3 = Number(cardAttr3);
    const maxSumVal = 210;
    const minVal = 0;
    const maxVal = 90;
    const isEmpty = cardName !== '' && cardDescription !== '' && cardImage !== '';
    const isSumBigger = (at1 + at2 + at3) <= maxSumVal;
    const isAtBigger = at1 <= maxVal && at2 <= maxVal && at3 <= maxVal;
    const isAtSmaller = at1 >= minVal && at2 >= minVal && at3 >= minVal;
    if (isEmpty && isSumBigger && isAtBigger && isAtSmaller) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (event.target.type === 'checkbox') value = event.target.checked;
    this.setState({
      [name]: value,
    },
    () => this.validateButtonSave());
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
      hasTrunfo,
    } = this.state;

    const currCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, currCard],
    }),
    () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: this.hasTrunfo(),
    }));
  }

  handleFilterPerName = () => {
    const { savedCards, filterPerName } = this.state;
    return savedCards.filter((card) => {
      if (filterPerName === '') return savedCards;
      return card.cardName.includes(filterPerName);
    });
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
      hasTrunfo,
      isSaveButtonDisabled,
      // savedCards,
    } = this.state;

    const filteredPerName = this.handleFilterPerName();
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
        <div>
          <input
            type="text"
            onChange={ this.onInputChange }
            name="filterPerName"
            data-testid="name-filter"
          />
        </div>
        {
          filteredPerName.map((card) => (
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
                onClick={ () => this.deleteCard(card.cardName) }
              >
                Excluir
              </button>
            </div>))
        }
      </>
    );
  }
}

export default App;
