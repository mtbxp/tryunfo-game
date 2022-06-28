import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.atributosIndividuais = this.atributosIndividuais.bind(this);
    this.testaInputs = this.testaInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
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
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
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

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
        />
        <Card
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
