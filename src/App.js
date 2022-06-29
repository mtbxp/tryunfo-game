import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

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

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.activeBtn());
  }

  activeBtn = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    const stringsInputs = () => [
      cardName !== '',
      cardDescription !== '',
      cardImage !== '',
      cardRare !== ''].every((element) => element === true);

    const maxAttr = 90;

    const inputsNumbers = () => [
      (cardAttr1 <= maxAttr && cardAttr1 >= 0),
      (cardAttr2 <= maxAttr && cardAttr2 >= 0),
      (cardAttr3 <= maxAttr && cardAttr3 >= 0),
    ].every((element) => element === true);

    const sumAttr = 210;

    const arrayNumbers = () => [
      (+cardAttr1) + (+cardAttr2) + (+cardAttr3),
    ];

    if (stringsInputs() && inputsNumbers() && arrayNumbers()[0] <= sumAttr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      (this.setState({
        isSaveButtonDisabled: true,
      }));
    }
  }

  saveList = () => {

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
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
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
        />
      </div>
    );
  }
}

export default App;
