import React from 'react';
// import { number } from 'prop-types';
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
      isSavedButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validaButton = this.validaButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validaButton);
  }

  validaButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const max = 90;
    const min = 0;
    const somamax = 210;

    const soma = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    const validaSoma = () => {
      if (
        soma <= somamax
        && parseInt(cardAttr1, 10) <= max
        && parseInt(cardAttr2, 10) <= max
        && parseInt(cardAttr3, 10) <= max
        && parseInt(cardAttr1, 10) >= 0
        && parseInt(cardAttr2, 10) >= 0
        && parseInt(cardAttr3, 10) >= 0
      ) return true;
    };
    const cardArray = [cardName, cardDescription, cardImage];
    const noInputs = cardArray.every((inputs) => inputs !== '');

    const valida = validaSoma() && noInputs;

    if (valida) {
      this.setState({ isSavedButtonDisabled: false });
    } else {
      this.setState({ isSavedButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSavedButtonDisabled,
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
          onInputChange={ this.onInputChange }
          isSavedButtonDisabled={ isSavedButtonDisabled }
        />
        <h2>Card</h2>
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

    );
  }
}

export default App;
