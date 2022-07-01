import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cards: [],
    };
  }

  ativaBotao = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;
    const noventa = 90;
    const zero = 0;
    const duzentosEdez = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const soma = attr1 + attr2 + attr3;
    const avalia1 = cardName && cardDescription && cardImage && cardRare;
    const avaliaAttr = attr1 <= noventa && attr2 <= noventa && attr3 <= noventa;
    const zeroAttr = attr1 >= zero && attr2 >= zero && attr3 >= zero;
    const avaliaSoma = soma <= duzentosEdez;
    if (avalia1 && avaliaAttr && zeroAttr && avaliaSoma) {
      this.setState({
        isSaveButtonDisabled: false,
      });
      if (cardTrunfo) this.setState({ hasTrunfo: true });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  salvaCarta = (carta) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, carta],
    }));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    const valorHasTrunfo = cardTrunfo;
    this.salvaCarta(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: valorHasTrunfo,
      isSaveButtonDisabled: true,
    });
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, this.ativaBotao);
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
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
