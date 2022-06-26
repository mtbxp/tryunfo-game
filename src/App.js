import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ListOfCards from './components/ListOfCards';

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
      enableButton: false,
      listOfCards: [],
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validationButton = this.validationButton.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validationButton);
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const newCard = { ...this.state };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: [...prevState.listOfCards, newCard].some((card) => card.cardTrunfo),
      listOfCards: [...prevState.listOfCards, newCard],
    }));
  }

  validationButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const sumMax = 210;
    const pointsMax = 90;
    const sum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    const rulesForValues = () => {
      if (
        sum <= sumMax
        && parseInt(cardAttr1, 10) <= pointsMax
        && parseInt(cardAttr2, 10) <= pointsMax
        && parseInt(cardAttr3, 10) <= pointsMax
        && parseInt(cardAttr1, 10) >= 0
        && parseInt(cardAttr2, 10) >= 0
        && parseInt(cardAttr3, 10) >= 0
      ) return true;
    };

    const fields = [cardName, cardDescription, cardImage];
    const noEmptyInputs = fields.every((input) => input !== '');

    const validation = rulesForValues() && noEmptyInputs;

    if (validation) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  removeButton({ target }) {
    const { listOfCards } = this.state;
    const name = target.value;
    const selectedCards = (listOfCards.filter((cards) => cards.cardName !== name));
    this.setState(() => ({
      listOfCards: selectedCards,
      hasTrunfo: selectedCards.some((trunfo) => trunfo.cardTrunfo),
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
      hasTrunfo,
      listOfCards,
      enableButton,
      isSaveButtonDisabled,
      removeButton,
    } = this.state;
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
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
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
          enableButton={ enableButton }
          removeButton={ removeButton }
        />
        <ListOfCards
          listOfCards={ listOfCards }
          cardName={ cardName }
          cardTrunfo={ cardTrunfo }
          removeButton={ this.removeButton }
        />
      </div>
    );
  }
}

export default App;
