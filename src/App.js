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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  ativaBotao = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;
    const avalia1 = cardName && cardDescription && cardImage;
    const avalia2 = cardAttr1 && cardAttr2 && cardAttr3;
    if (avalia1 && avalia2) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = (event) => {
    const { addCards } = this.props;
    event.preventDefault();
    addCards(this.state);
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, this.ativaBotao);
  }

  addCards = (carta) => {
    this.setState((cartas) => ({
      cards: [...cartas.cards, carta],
    }));
  }

  render() {
    const { cards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick } />
        <Card cards={ cards } />
      </div>
    );
  }
}

export default App;
