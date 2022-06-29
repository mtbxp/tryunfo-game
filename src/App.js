import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      description: '',
      valueCard1: '0',
      valueCard2: '0',
      valueCard3: '0',
      urlImage: '',
      rare: '',
      superTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  validateButton = () => {
    const { card, description, urlImage, valueCard1, valueCard2,
      valueCard3 } = this.state;
    const maxValue = 90;
    const minValue = 0;
    const sumValue = 210;

    const validateText = card !== '' && description !== '' && urlImage !== '';

    const min = Number(valueCard1) >= minValue && Number(valueCard2) >= minValue
      && Number(valueCard3) >= minValue;
    const max = Number(valueCard1) <= maxValue && Number(valueCard2) <= maxValue
      && Number(valueCard3) <= maxValue;
    const sum = Number(valueCard1) + Number(valueCard2) + Number(valueCard3) <= sumValue;

    if (validateText && sum && min && max) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const valueState = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueState,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateButton(),
    }));
  }

  onSaveButtonClick = () => {
    const { card, description, valueCard1, valueCard2, valueCard3, urlImage,
      rare, superTrunfo } = this.state;
    this.setState((prev) => ({
      card: '',
      description: '',
      valueCard1: '0',
      valueCard2: '0',
      valueCard3: '0',
      urlImage: '',
      rare: '',
      superTrunfo: false,
      hasTrunfo: prev.superTrunfo,
      cardList: [
        ...prev.cardList,
        { card,
          description,
          valueCard1,
          valueCard2,
          valueCard3,
          urlImage,
          rare,
          superTrunfo,
        }],
    }));
  }

  render() {
    const { card, description, valueCard1, valueCard2, valueCard3, urlImage,
      rare, superTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ card }
          cardDescription={ description }
          cardAttr1={ valueCard1 }
          cardAttr2={ valueCard2 }
          cardAttr3={ valueCard3 }
          cardImage={ urlImage }
          cardRare={ rare }
          cardTrunfo={ superTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ card }
          cardDescription={ description }
          cardAttr1={ valueCard1 }
          cardAttr2={ valueCard2 }
          cardAttr3={ valueCard3 }
          cardImage={ urlImage }
          cardRare={ rare }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
