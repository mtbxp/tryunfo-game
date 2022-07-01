import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const n90 = 90;
    const n210 = 210;
    const num1 = parseInt(cardAttr1, 10);
    const num2 = parseInt(cardAttr2, 10);
    const num3 = parseInt(cardAttr3, 10);
    const sum = num1 + num2 + num3;
    const att1 = num1 >= 0 && num1 <= n90;
    const att2 = num2 >= 0 && num2 <= n90;
    const att3 = num3 >= 0 && num3 <= n90;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardAttr1 === ''
    || cardAttr2 === ''
    || cardAttr3 === ''
    || sum > n210
    || att1 === false
    || att2 === false
    || att3 === false) {
      return true;
    }
    return false;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.enableButton(),
    }));
  }

  onSaveButtonClick = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo Pokemon</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardAttr4={ cardAttr4 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardAttr4={ cardAttr4 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
