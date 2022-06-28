import React from 'react';
import './styles/style.css';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: 'opa',
  cardDescription: 'bao',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: 'opa',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

const arrOfCards = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validateSaveButton = () => {
    const { cardName, cardImage, cardDescription, cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const attr1ToNumber = parseInt(cardAttr1, 10);
    const attr2ToNumber = parseInt(cardAttr2, 10);
    const attr3ToNumber = parseInt(cardAttr3, 10);
    const maxValue = 210;
    const maxIndividualValue = 90;
    if (!cardName.length
      || !cardImage.length
      || !cardDescription.length
      || !cardRare.length) return true;
    if (attr1ToNumber + attr2ToNumber + attr3ToNumber > maxValue) return true;
    if (attr1ToNumber < 0
      || attr2ToNumber < 0
      || attr3ToNumber < 0) return true;
    if (attr1ToNumber > maxIndividualValue
      || attr2ToNumber > maxIndividualValue
      || attr3ToNumber > maxIndividualValue) return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => (
      arrOfCards.push(prevState)
    ));
    this.setState(
      INITIAL_STATE,
    );
    arrOfCards.pop();
    console.log(arrOfCards);
  }

  render() {
    return (
      <div className="main-content">
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.validateSaveButton() }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card { ... this.state } />
      </div>
    );
  }
}

export default App;
