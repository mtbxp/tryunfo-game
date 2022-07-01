import React, { Component } from 'react';
import './index.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

verificarCampo = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = this.state;

  const pontosPorCarta = 90;
  const somaDasCartas = 210;
  const somaDosAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

  if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && cardAttr1 >= 0
    && cardAttr2 >= 0
    && cardAttr3 >= 0
    && cardAttr1 <= pontosPorCarta
    && cardAttr2 <= pontosPorCarta
    && cardAttr3 <= pontosPorCarta
    && somaDosAtributos <= somaDasCartas) {
    this.setState({
      isSaveButtonDisabled: false,
    });
  } else {
    this.setState({
      isSaveButtonDisabled: true,
    });
  }
}

onInputChange = ({ target }) => {
  const { name, type } = target;
  const value = type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, () => this.verificarCampo());
}

onSaveButtonClick = (event) => {
  event.preventDefault();

  const {
    cardName,
    cardDescription,
    cardImage,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardTrunfo,
    cards } = this.state;

  const allCards = {
    cardName,
    cardDescription,
    cardImage,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardTrunfo };

  this.setState((preventState) => ({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    isSaveButtonDisabled: true,
    cardTrunfo: false,
    cards: [...preventState.cards, allCards],
  }), () => this.setState({
    hasTrunfo: !!cardTrunfo || cards.includes((flag) => flag.cardTrunfo),
  }));
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
    isSaveButtonDisabled,
    hasTrunfo,
    cards,
  } = this.state;

  return (
    <section>
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
      </div>
      <div>
        <h1>Pré-visualização</h1>
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
      <div>
        <h1>Mostruário</h1>
        {
          cards.map((flag, acc) => (
            <Card key={ acc } { ...flag } />
          ))
        }
      </div>
    </section>
  );
}
}

export default App;
