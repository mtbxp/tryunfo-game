import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardSave: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateButton());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const cardSave = this.state;

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: [...prevState.cardSave, cardSave].some((element) => element.cardTrunfo),
      cardSave: [...prevState.cardSave, cardSave],
    }));
  }

  validateButton() {
    const maximo = 90;
    const minimo = 0;
    const soma = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const verificaSoma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName
        && cardDescription
        && cardImage
        && cardRare
        && Number(cardAttr1) >= minimo
        && Number(cardAttr2) >= minimo
        && Number(cardAttr3) >= minimo
        && Number(cardAttr1) <= maximo
        && Number(cardAttr2) <= maximo
        && Number(cardAttr3) <= maximo
        && (verificaSoma <= soma)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      hasTrunfo,
      cardSave } = this.state;
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
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        <p>Cartas Salvas</p>
        { cardSave.map((carta, index) => (
          <Card
            key={ index.carta }
            cardName={ carta.cardName }
            cardDescription={ carta.cardDescription }
            cardAttr1={ carta.cardAttr1 }
            cardAttr2={ carta.cardAttr2 }
            cardAttr3={ carta.cardAttr3 }
            cardImage={ carta.cardImage }
            cardRare={ carta.cardRare }
            cardTrunfo={ carta.cardTrunfo }
          />
        )) }
      </div>
    );
  }
}

export default App;
