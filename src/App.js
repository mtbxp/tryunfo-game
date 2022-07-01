import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCard: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const valueState = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valueState,
    }, () => this.enableButtonSave());
  }

  areFieldsValid = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      // cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardAttr1.length === 0
      || cardAttr2.length === 0
      || cardAttr3.length === 0) {
      return false;
    }
    return true;
  };

  areAttrValid = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const min = 0;
    const max = 90;
    const maxTotal = 210;

    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const isBiggerThan210 = total > maxTotal;

    if (isBiggerThan210) {
      return false;
    } if (cardAttr1 < min || cardAttr1 > max) {
      return false;
    } if (cardAttr2 < min || cardAttr2 > max) {
      return false;
    } if (cardAttr3 < min || cardAttr3 > max) {
      return false;
    }
    return true;
  };

  isValidForm = () => {
    if (this.areFieldsValid() === true && this.areAttrValid() === true) {
      return true;
    }
    return false;
  };

  enableButtonSave = () => {
    if (this.isValidForm() === true) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      saveCard,
    } = this.state;

    this.setState({
      saveCard: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        saveCard,
      },

      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
