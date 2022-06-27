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

  onInputChange = (e) => {
    const { isSaveButtonDisabled } = this.state;
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    }, () => {
      if (!this.isInputFilled() && !this.sumOfAttr()
      && !this.verifyAttr() && !this.verifyAttr2()) {
        this.setState({
          isSaveButtonDisabled: false,
        }, console.log(isSaveButtonDisabled));
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        }, console.log(isSaveButtonDisabled));
      }
    });
  }

  isInputFilled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (cardName.length !== 0 && cardDescription.length !== 0
    && cardImage.length !== 0 && cardRare.length !== 0) {
      return false;
    }
    return true;
  }

  sumOfAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 210;
    if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > magic) {
      return true;
    }
    return false;
  }

  verifyAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 90;
    if (Number(cardAttr1) > magic) {
      return true;
    }
    if (Number(cardAttr2) > magic) {
      return true;
    }
    if (Number(cardAttr3) > magic) {
      return true;
    }
    return false;
  }

  verifyAttr2 = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const magic = 0;
    if (Number(cardAttr1) < magic) {
      return true;
    }
    if (Number(cardAttr2) < magic) {
      return true;
    }
    if (Number(cardAttr3) < magic) {
      return true;
    }
    return false;
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.state;

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
      </div>
    );
  }
}

export default App;
