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
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validaBotao = this.validaBotao.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => (this.validaBotao()));
  }

  validaBotao() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const max = 90;
    const min = 0;
    const somaMax = 210;
    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const validaSoma = () => {
      if (
        soma <= somaMax
        && Number(cardAttr1) <= max
        && Number(cardAttr2) <= max
        && Number(cardAttr3) <= max
        && Number(cardAttr1) >= min
        && Number(cardAttr2) >= min
        && Number(cardAttr3) >= min
      ) return true;
    };

    const cardArray = [cardName, cardDescription, cardImage];

    const noInputs = cardArray.every((input) => input !== '');

    const valida = validaSoma() && noInputs;

    if (valida) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
    console.log(valida);
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
      isSaveButtonDisabled,
      // onSaveButtonClick,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ onSaveButtonClick }
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
