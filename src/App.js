import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: [],

    };

    this.handleValue = this.handleValue.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleBaralho = this.handleBaralho.bind(this);
    this.handleHasTrue = this.handleHasTrue.bind(this);
  }

  handleValue({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.handleSaveButton());
  }

  handleHasTrue() {
    const { baralho } = this.state;
    if (baralho.find((element) => element.cardTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  handleSaveButton() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const somaMax = 210;
    const attrMax = 90;
    const attrMin = 0;
    if (
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= somaMax
      && Number(cardAttr1) <= attrMax
      && Number(cardAttr2) <= attrMax
      && Number(cardAttr3) <= attrMax
      && Number(cardAttr1) >= attrMin
      && Number(cardAttr2) >= attrMin
      && Number(cardAttr3) >= attrMin
      && cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
      console.log();
    }
  }

  handleBaralho(event) {
    event.preventDefault();

    const currentState = { ...this.state };

    this.setState((actualState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      baralho: [...actualState.baralho, currentState],
    }), () => this.handleHasTrue());
  }

  render() {
    const { cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleValue }
          onSaveButtonClick={ this.handleBaralho }
        />
        <Card
          cardName={ cardName }
          onInputChange={ onInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
