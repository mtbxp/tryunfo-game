import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartas: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: false,
      },
    }
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    });
  }

  onSaveButtonClick = (carta) => {
    this.setState({
      cartas: [...this.state.cartas, carta],
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state.cartas;
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
