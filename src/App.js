import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

  validadTypeNumber = (keys, numbers) => {
    const numMax = 90;
    if (numbers >= 0 && numbers <= numMax) {
      this.setState({ [keys]: numbers });
    } else {
      this.setState({ [keys]: '' });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    if (type === 'number') {
      this.validadTypeNumber(name, value);
    } else {
      this.setState({
        [name]: type === 'checkbox' ? checked : value,
      }, () => this.validateAll());
    }
  }

  validateAll = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    if (cardName
      && cardDescription
      && cardAttr1
      && cardAttr2
      && cardAttr3
      && cardImage
      && cardRare) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const objects = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({ cards: [...prevState.cards, objects] }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'Normal',
      });
      this.validateTrunfo();
    });
  }

  validateTrunfo = () => {
    const { cards } = this.state;
    const trunfo = cards.some((card) => card.cardTrunfo === true);
    if (trunfo === true) {
      this.setState({ hasTrunfo: true });
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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <>
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
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
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
        { cards.map((card, index) => (
          <div key={ index }>
            <h4>{ `Nome: ${card.cardName}`}</h4>
            <p>{ `Descrição: ${card.cardDescription}`}</p>
            <p>{ `Atributo 1: ${card.cardAttr1}`}</p>
            <p>{ `Atributo 2: ${card.cardAttr2}`}</p>
            <p>{ `Atributo 3: ${card.cardAttr3}`}</p>
            <img src={ cardImage } alt={ cardName } />
            <p>{ `Raridade: ${card.cardRare}`}</p>
            <p>{ `Trunfo: ${card.cardTrunfo}`}</p>
          </div>
        ))}
      </>
    );
  }
}

export default App;
