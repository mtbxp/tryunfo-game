import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.atributosIndividuais = this.atributosIndividuais.bind(this);
    this.testaInputs = this.testaInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.salvaCards = this.salvaCards.bind(this);
    this.renderizaCards = this.renderizaCards.bind(this);
    this.excluiCard = this.excluiCard.bind(this);
    this.verificaTrunfo = this.verificaTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    }, () => {
      const estadoAtt = this.state;
      if (this.testaAtributos(estadoAtt) === true
        && this.testaInputs(estadoAtt) === true) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick() {
    const { cardTrunfo } = this.state;
    this.salvaCards();
    if (cardTrunfo === true) {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: true,
        hasTrunfo: true,
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      });
    }
  }

  atributosIndividuais({ cardAttr1, cardAttr2, cardAttr3 }) {
    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const vlrMaximo = 90;
    const sim = attrs.every((attr) => attr <= vlrMaximo && attr >= 0);
    return sim;
  }

  testaAtributos({ cardAttr1, cardAttr2, cardAttr3 }) {
    let attrs = [cardAttr1, cardAttr2, cardAttr3];
    attrs = attrs.map((e) => Number(e));
    const soma = attrs.reduce((total, numero) => total + numero, 0);
    const valorMaximo = 210;
    const vlrMx = this.atributosIndividuais(this.state);
    if (soma > valorMaximo || vlrMx === false) {
      return false;
    }
    return true;
  }

  testaInputs({ cardName, cardDescription, cardImage }) {
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0) {
      return true;
    }
    return false;
  }

  salvaCards() {
    const infCard = this.state;
    const { cards } = this.state;
    const add = {
      cardName: infCard.cardName,
      cardDescription: infCard.cardDescription,
      cardAttr1: infCard.cardAttr1,
      cardAttr2: infCard.cardAttr2,
      cardAttr3: infCard.cardAttr3,
      cardImage: infCard.cardImage,
      cardRare: infCard.cardRare,
      cardTrunfo: infCard.cardTrunfo,
    };
    this.setState({
      cards: [...cards, add],
    });
  }

  excluiCard(index) {
    const { cards } = this.state;
    this.verificaTrunfo(index);
    this.setState(cards.splice(index, 1));
  }

  verificaTrunfo(index) {
    const { cards } = this.state;
    if (cards[index].cardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  renderizaCards() {
    const { cards } = this.state;
    return cards.map((card, index) => {
      const { cardName, cardDescription,
        cardAttr1, cardAttr2,
        cardAttr3, cardImage,
        cardRare, cardTrunfo } = card;
      return (
        <div key={ cardName }>
          <Card
            key={ index }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardTrunfo={ cardTrunfo }
          />
          <button
            data-testid="delete-button"
            type="button"
            onClick={ () => this.excluiCard(index) }
          >
            Excluir
          </button>
        </div>
      );
    });
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo } = this.state;

    return (
      <div>
        <h1>PokeTrunfo</h1>
        <div className="divFCard">
          <Form
            cardName={ cardName }
            onInputChange={ this.onInputChange }
            cardDescription={ cardDescription }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="cards">
          { this.renderizaCards() }
        </div>
      </div>
    );
  }
}

export default App;
