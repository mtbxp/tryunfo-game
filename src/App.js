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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: '',
      isSaveButtonDisabled: true,
      listaCartasSalvas: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.temAlguemVazio = this.temAlguemVazio.bind(this);
    this.isDisable = this.isDisable.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
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
      listaCartasSalvas,
    } = this.state;
    const card = {
      name: cardName,
      descricao: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      raridade: cardRare,
      superTrunfo: cardTrunfo,
      hasTrunfo,
    };

    const arrayCartas = [...listaCartasSalvas, card];
    this.setState((prevState) => ({
      ...prevState,
      listaCartasSalvas: arrayCartas,
    }));
    const trunfo = arrayCartas.some((e) => e.superTrunfo);
    if (trunfo) {
      this.setState({
        hasTrunfo: 'true',
      });
    }

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

  temAlguemVazio() {
    const inputs = [
      'cardName',
      'cardDescription',
      'cardAttr1',
      'cardAttr2',
      'cardAttr3',
      'cardImage',
    ];
    const estados = { ...this.state };
    const filtra = (e) => estados[e] === '';
    const result = inputs.filter(filtra);
    return result.length;
  }

  isDisable() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const camposNumber = [
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ];
    const result = camposNumber.reduce((prev, cur) => prev + parseInt(cur || '0', 10), 0);
    const lMax = 90;
    const lMin = 0;
    const filtrar = (e) => parseInt(e || '0', 10) > lMax || parseInt(e || '0', 10) < lMin;
    const temNumeroMaiorQ90 = camposNumber.filter(filtrar).length;

    let disable = false;
    const limiteMaximoCampos = 210;
    if (this.temAlguemVazio() || result > limiteMaximoCampos || temNumeroMaiorQ90) {
      disable = true;
    }

    return disable;
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
      listaCartasSalvas,
    } = this.state;
    return (
      <div>
        <h1 style={ { textAlign: 'center' } }>Tryunfo</h1>
        <div className="containerPrincipal">
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
            isSaveButtonDisabled={ this.isDisable() }
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
            hasTrunfo={ hasTrunfo }
          />

        </div>
        {
          listaCartasSalvas.map((e) => (
            <Card
              key={ e.name }
              cardName={ e.name }
              cardDescription={ e.descricao }
              cardAttr1={ e.attr1 }
              cardAttr2={ e.attr2 }
              cardAttr3={ e.attr3 }
              cardImage={ e.image }
              cardRare={ e.raridade }
              cardTrunfo={ e.superTrunfo }
              hasTrunfo={ e.hasTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
