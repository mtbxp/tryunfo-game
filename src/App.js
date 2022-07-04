import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardImage: '',
      cardTrunfo: false,
    };
  }

  checkInputs = () => {
    const { cardName, cardDescription, cardImage } = this.state;

    if (cardName.length === 0) return true;
    if (cardDescription.length === 0) return true;
    if (cardImage.length === 0) return true;

    return false;
  };

  checkAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attributesNumber = [
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10),
    ];

    const sum = attributesNumber.reduce((acc, cur) => acc + cur);

    const limitSum = 210;
    const limitMax = 90;
    const limitMin = 0;

    if (sum > limitSum) return true;
    if (cardAttr1 < limitMin || cardAttr1 > limitMax) return true;
    if (cardAttr2 < limitMin || cardAttr2 > limitMax) return true;
    if (cardAttr3 < limitMin || cardAttr3 > limitMax) return true;

    return false;
  };

  validationsSave = () => {
    if (this.checkAttributes() === true) return true;
    if (this.checkInputs() === true) return true;
  };

  saveCards = (event) => {
    event.preventDefault();

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
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
    } = this.state;

    return (
      <section className="App">
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
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.validationsSave() }
          onSaveButtonClick={ this.saveCards }
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
      </section>
    );
  }
}

export default App;
