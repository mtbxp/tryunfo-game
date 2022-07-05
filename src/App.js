import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      listSaveCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateButton(),
    }));
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState((prevArray) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: true,
        saveCards: [...prevArray.ListSaveCards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
      }));
    } else {
      this.setState((prevArray) => ({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
        saveCards: [...prevArray.ListSaveCards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
      }));
    }
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const maxAtributos = 211;
    const somaAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (cardName !== '' || cardDescription !== '' || cardImage !== '' || cardRare !== ''
      || cardAttr1 < minValue || cardAttr1 > maxValue
      || cardAttr2 < minValue || cardAttr2 > maxValue
      || cardAttr3 < minValue || cardAttr3 > maxValue
      || somaAtributos > maxAtributos) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
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
    } = this.state;
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...{
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } }
        />
      </>
    );
  }
}
export default App;
