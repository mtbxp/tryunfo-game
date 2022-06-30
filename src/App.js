import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// import data from './components/data';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  allCards: [{
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  }],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  addNewCard = (card) => {
    // console.log(card);
    this.setState((prevState) => ({
      allCards: [...prevState.allCards, card],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  }

  validadeNumbersInput = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const stateTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const totalLimit = 210;
    const inputLimit = 90;

    if (cardAttr1 > inputLimit || cardAttr2 > inputLimit || cardAttr3 > inputLimit) {
      return true;
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      return true;
    }
    if (stateTotal > totalLimit) {
      return true;
    }
    return false;
  }

  handleSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const validateTxtInput = cardName.length
    && cardDescription.length
    && cardImage.length
    && cardRare.length;

    if (validateTxtInput && !this.validadeNumbersInput()) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    return this.setState({
      isSaveButtonDisabled: true,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleSaveButtonDisabled());
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
      isSaveButtonDisabled,
      allCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            // addNewCard={ this.addNewCard }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ false }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.addNewCard }
            allCards={ allCards }
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
            allCards={ allCards }
          />
        </div>
      </div>
    );
  }
}

export default App;
