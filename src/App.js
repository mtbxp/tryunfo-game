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
    };

    this.onChange = this.onChange.bind(this);
    this.validaButton = this.validaButton.bind(this);
    this.checaInputs = this.checaInputs.bind(this);
    this.salvaAtributos = this.salvaAtributos.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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
      Rare } = this.state;

    const infos = {
      cardName,
      Description,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      Rare,
    };

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
      desable } = this.state;
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
          cardTrunfo
          hasTrunfo={ false }
          isSaveButtonDisabled={ desable }
          onInputChange={ this.onChange }
          onSaveButtonClick={ this.salvaAtributos }
        />
        <Card
          cardName={ cardName }
          cardDescription={ Description }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ Rare }
          cardTrunfo
        />
      </main>
    );
  }
}

export default App;
