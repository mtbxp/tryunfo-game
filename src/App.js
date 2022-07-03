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

    };
  }

  // Submit Button

  enableSubmitButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const maxAttrValue = 90;
    const minAttrValue = 0;
    const sumAttrsValues = 210;

    const totalSum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= sumAttrsValues;

    const verifyEmptyInput = cardName !== ''
    && cardDescription !== ''
    && cardImage !== '';

    this.setState({
      isSaveButtonDisabled: !(Number(cardAttr1) <= maxAttrValue
        && Number(cardAttr1) >= minAttrValue
        && Number(cardAttr2) <= maxAttrValue
        && Number(cardAttr2) >= minAttrValue
        && Number(cardAttr3) <= maxAttrValue
        && Number(cardAttr3) >= minAttrValue
        && totalSum
        && verifyEmptyInput),
    });
  }

  // event Handler genérico

    onInputChange = ({ target }) => {
      const { name, type } = target;
      const value = (type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, () => this.enableSubmitButton());
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
      } = this.state;

      return (
        <div>
          <h1>Tryunfo</h1>
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
        </div>
      );
    }
}

export default App;
