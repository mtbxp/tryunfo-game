import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardTrunfo: true,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateButton());
  }

  validateButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const stringInputs = () => [
      cardName !== '',
      cardDescription !== '',
      cardImage !== '',
      cardRare !== '']
      .every((inputs) => inputs === true);

    const maxAtt = 90;

    const numbersInputs = () => [
      (cardAttr1 <= maxAtt && cardAttr1 >= 0),
      (cardAttr2 <= maxAtt && cardAttr2 >= 0),
      (cardAttr3 <= maxAtt && cardAttr3 >= 0),
    ].every((inputs) => inputs === true);

    const allMaxSum = 210;

    const sumAtt = () => [
      (+cardAttr1)
       + (+cardAttr2)
        + (+cardAttr3)];

    if (stringInputs() && numbersInputs() && sumAtt()[0] <= allMaxSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      (this.setState({
        isSaveButtonDisabled: true,
      }));
    }
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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          validateButton={ this.validateButton }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
