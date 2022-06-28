import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      Description: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      Rare: '',
      desable: true,
      hasTrunfo: false,
      cardTrunfo: false,
      cartasFeitas: [],
    };

    this.onChange = this.onChange.bind(this);
    this.validaButton = this.validaButton.bind(this);
    this.checaInputs = this.checaInputs.bind(this);
    this.salvaAtributos = this.salvaAtributos.bind(this);
    this.limpaAtributos = this.limpaAtributos.bind(this);
  }

  onChange({ target }) {
    if (target.type === 'checkbox') {
      this.setState({ cardTrunfo: true });
    }

    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    }, () => { this.validaButton(); });
  }

  checaInputs() {
    const { cardName,
      Description,
      cardImage,
      Rare } = this.state;
    if ((cardName !== '' && Description !== '') && (cardImage !== '' && Rare !== '')) {
      this.setState({ desable: false });
    } else {
      this.setState({ desable: true });
    }
  }

  checaAtributos() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const art1 = parseInt(cardAttr1, 10);
    const art2 = parseInt(cardAttr2, 10);
    const art3 = parseInt(cardAttr3, 10);
    const soma = art1 + art2 + art3;
    const limite = 210;
    const max = 90;
    const min = 0;
    if (cardAttr1 < min || cardAttr1 > max) {
      this.setState({ desable: true });
    }
    if (cardAttr2 < min || cardAttr2 > max) {
      this.setState({ desable: true });
    }
    if (cardAttr3 < min || cardAttr3 > max) {
      this.setState({ desable: true });
    }
    if (soma > limite) {
      this.setState({ desable: true });
    }
  }

  validaButton() {
    this.checaInputs();
    this.checaAtributos();
  }

  salvaAtributos() {
    const { cardName,
      Description,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cartasFeitas,
      Rare } = this.state;

    const infos = {
      Nome: cardName,
      Descriao: Description,
      atribu1: cardAttr1,
      atribu2: cardAttr2,
      atribu3: cardAttr3,
      image: cardImage,
      rarety: Rare,
    };

    this.setState({
      cartasFeitas: [...cartasFeitas, infos],
    }, () => { this.limpaAtributos(); });
    console.log(cartasFeitas[0]);

    const { hasTrunfo } = this.state;

    if (hasTrunfo === false) {
      this.setState({ hasTrunfo: true });
    }
  }

  limpaAtributos() {
    this.setState({
      cardName: '',
      Description: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      Rare: 'Normal',
      desable: true,
    });
  }

  render() {
    const { cardName,
      Description,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      Rare,
      hasTrunfo,
      cardTrunfo,
      desable } = this.state;
    const infos = {
      Nome: cardName,
      Descriao: Description,
      atribu1: cardAttr1,
      atribu2: cardAttr2,
      atribu3: cardAttr3,
      image: cardImage,
      rarety: Rare,
    };
    const { Nome,
      Descriao,
      atribu1,
      atribu2,
      atribu3,
      image,
      rarety } = infos;
    return (
      <main>
        <Form
          cardName={ cardName }
          cardDescription={ Description }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ Rare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ desable }
          onInputChange={ this.onChange }
          onSaveButtonClick={ this.salvaAtributos }
        />
        <Card
          cardName={ Nome }
          cardDescription={ Descriao }
          cardAttr1={ atribu1 }
          cardAttr2={ atribu2 }
          cardAttr3={ atribu3 }
          cardImage={ image }
          cardRare={ rarety }
          cardTrunfo
        />
      </main>
    );
  }
}

export default App;
