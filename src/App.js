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
      /*       hasTrunfo: false, */
      isSaveButtonDisabled: true,
    };
  }

  enableButtonSave = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    /*     Definição dos valores e comparações
    As constantes retornam true se a logica é verdadeira */

    const MaxSom = 210;
    const valorMax = 90;
    const ValorMin = 0;

    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= MaxSom;

    const minimo = Number(cardAttr1) <= valorMax
    && Number(cardAttr2) <= valorMax
    && Number(cardAttr3) <= valorMax;

    const menorZero = Number(cardAttr1) >= ValorMin
    && Number(cardAttr2) >= ValorMin
    && Number(cardAttr3) >= ValorMin;

    /* A constante abaixo retorna true se os campos nao estiverem vazios */

    const preenchidos = cardName !== '' && cardDescription !== '' && cardImage !== '';

    /*     É feito uma condição de que se todas as constantes boleanas acima retornarem true a função retorna false, caso contrario retorna true
    desse modo muda a condição do sate quando chamada dentro da função handle change; */

    if (preenchidos && minimo && menorZero && soma) {
      return false;
    }
    return true;
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState(
      {
        [name]: value,
      },
      () => this.setState({
        isSaveButtonDisabled: this.enableButtonSave(),
      }),
    );
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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onChange={ this.enableButtonSave }
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
