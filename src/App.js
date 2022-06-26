import React from 'react';
import './style/App.css';
import Card from './components/Card';
import Form from './components/Form';
import Data from './components/Data';

class App extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.saveButtonDisabled = this.saveButtonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: Data,
    };
  }

  inputChange({ target }) {
    const { type, name } = target;
    let value = (type === 'checkbox') ? target.checked : target.value;
    if (type === 'number') {
      value = parseFloat(value);
    }
    this.setState({
      [name]: value,
    });
    this.saveButtonDisabled();
  }

  saveButtonDisabled() {
    const maxPoints = 210;
    const maxAttr = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      data,
    } = this.state;
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && cardAttr1 <= maxAttr
    && cardAttr1 >= 0
    && cardAttr2 <= maxAttr
    && cardAttr2 >= 0
    && cardAttr3 <= maxAttr
    && cardAttr3 >= 0
    && cardAttr1 + cardAttr2 + cardAttr3 <= maxPoints) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (data.some((item) => item.isTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  }

  saveCard(card) {
    this.setState((prevState) => ({
      data: [card, ...prevState.data],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
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
        <header>
          <h1>Tryunfo</h1>
        </header>
        <div className="createCard">
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
            onInputChange={ this.inputChange }
            onSaveButtonClick={ this.saveCard }
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
      </div>
    );
  }
}

export default App;
