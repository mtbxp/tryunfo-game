import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardAttr4: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo Pokemon</h1>
        <Form
          cardName={ this.state.cardName }
          cardDescription={ this.state.cardDescription }
          cardImage={ this.state.cardImage }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardAttr4={ this.state.cardAttr4 }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ this.state.cardName }
          cardImage={ this.state.cardImage }
          cardDescription={ this.state.cardDescription }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardAttr4={ this.state.cardAttr4 }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
