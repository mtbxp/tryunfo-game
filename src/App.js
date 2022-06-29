import React from 'react';
import Card from './components/Card';
import Cartas from './components/Cartas';
import Form from './components/Form';

const stateInicial = {
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
  cartas: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateInicial;
  }

  handleForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const lista = [cardName, cardDescription, cardImage, cardRare];
    const lista2 = [cardAttr1, cardAttr2, cardAttr3];
    const number = 90;
    const number2 = 210;
    const valida = lista.every((valor) => valor.length > 0);
    // if (valida === false) {
    //   this.setState({
    //     isSaveButtonDisabled: true,
    //   });
    // } else {
    //   this.setState({
    //     isSaveButtonDisabled: false,
    // //   });
    // }
    const valida2 = lista2.every((atributo) => atributo <= number && atributo >= 0);
    if (
      valida2 === true && (Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3)) <= number2 && valida === true) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox' ? checked : value);
    this.setState({
      [name]: value,
    }, () => { this.handleForm(); });
  };

  enviar = (objeto) => {
    const { cartas } = this.state;
    this.setState((prevState) => ({
      cartas: [...prevState.cartas, objeto],
    }));
    console.log(cartas);
  }

  onSaveButtonClick = () => {
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
    } = this.state;

    this.enviar({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });
    if (cardTrunfo === 'on') {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        isSaveButtonDisabled: true,
        hasTrunfo: true,
      });
    } else {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        isSaveButtonDisabled: true,
      });
    }
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
      hasTrunfo,
      isSaveButtonDisabled,
      cartas,
    } = this.state;
    // console.log(this.onSaveButtonClick());
    return (
      <div>
        <h1>Tryunfoo</h1>
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
        { cartas.map((carta) => (
          <Cartas key={ carta.cardName } cartinha={ carta } />
        )) }
      </div>
    );
  }
}

export default App;
