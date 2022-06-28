import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // #VQV
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, (() => this.validateButton()));
  }

  validateButton =() => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const attrMax = 90;
    const attrMin = 0;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const sumMax = 210;

    if ((cardName !== '') && (cardImage !== '') && (cardDescription !== '')
      && (attrMin <= cardAttr1) && (attrMax >= cardAttr1)
      && (attrMin <= cardAttr2) && (attrMax >= cardAttr2)
      && (attrMin <= cardAttr3) && (attrMax >= cardAttr3)
      && (sumAttr <= sumMax)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      // savedCards,
    } = this.state;

    const objCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // savedCards.push(objCard);

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: [...prevState.savedCards, objCard],
    }));

    return cardTrunfo && this.setState({ hasTrunfo: true });
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
      savedCards,
      isSaveButtonDisabled,
    } = this.state;

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
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h2>Pré-visualização da carta</h2>
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
        <h2>Lista de Cartas</h2>
        {
          savedCards.map((elem) => (
            <Card
              Key={ elem.cardName }
              cardName={ elem.cardName }
              cardDescription={ elem.cardDescription }
              cardAttr1={ elem.cardAttr1 }
              cardAttr2={ elem.cardAttr2 }
              cardAttr3={ elem.cardAttr3 }
              cardImage={ elem.cardImage }
              cardRare={ elem.cardRare }
              cardTrunfo={ elem.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
