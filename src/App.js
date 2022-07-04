import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.saveButtonValidation = this.saveButtonValidation.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
    this.isSaveButtonDisabled = true;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.saveButtonValidation(); });
  }

  saveButtonValidation() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    let bool = false;
    bool = false;
    if (cardName.length === 0) bool = true;
    if (cardDescription.length === 0) bool = true;
    if (cardImage.length === 0) bool = true;
    const maxSum = 210;
    const maxValue = 90;
    const minValue = 0;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const sum = attr1 + attr2 + attr3;
    if (sum > maxSum) bool = true;
    if (attr1 < minValue || attr1 > maxValue) bool = true;
    if (attr2 < minValue || attr2 > maxValue) bool = true;
    if (attr3 < minValue || attr3 > maxValue) bool = true;
    this.setState({
      isSaveButtonDisabled: bool,
    });
  }

  saveCards(event) {
    event.preventDefault();
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

    if (cardTrunfo === true) this.setState({ hasTrunfo: true });

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(({ cards }) => (
      { cards: [...cards, card],
      }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
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
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <h2>Adicionar nova carta</h2>
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
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveCards }
        />
        <h2>Pré-visualização</h2>
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
        <h2>Todas as cartas</h2>
        {
          cards.map((element) => (
            <Card
              key={ element.cardName }
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardImage={ element.cardImage }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
