import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  onSaveButtonClick = () => {

  }
  // ============================================

  handleSubmit = (e) => {
    e.preventDefault();
    // Passar o state inteiro para o componente Pai
    // const { add } = this.props;
    // valida os campos title e level, se tudo estiver certo aí sim faz o add
    if (this.validateForm()) {
      add(this.state);

      // reset state depois de enviar
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
      });
    }
  }

  // isSaveButtonDisabled
  validateForm = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const erros = {};
    let formIsValid = true;
    const msg = 'Preencha o campo corretamente!';
    const msgNum = 'O atributo não pode ser maior que 90';
    const maxRoll = 90;
    const maxPoints = 210;

    if (!cardName.length || !cardDescription.length || !cardImage.length || !cardRare) {
      formIsValid = false;
      erros.cardName = msg;
      erros.cardDescription = msg;
      erros.cardImage = msg;
      erros.cardRare = msg;
    }
    // if de não ser menor que 0 e não ser maior que 90
    if (Number(cardAttr1) > maxRoll
    || Number(cardAttr2) > maxRoll
    || Number(cardAttr3) > maxRoll) {
      formIsValid = false;
      erros.cardAttr1 = msgNum;
      erros.cardAttr2 = msgNum;
      erros.cardAttr3 = msgNum;
    }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxPoints) {
      formIsValid = false;
    }

    this.setState({
      errors: erros,
    });

    return formIsValid;
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
