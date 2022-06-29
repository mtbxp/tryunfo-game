import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: ' ',
      cardDescription: ' ',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: ' ',
      cardRare: ' ',
      cardTrunfo: false,
    };
  }

onInputChange = ({ target }) => {
  const { name, type } = target;
  const value = type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
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
  } = this.state;
  return (
    <section>
      <Form onInputChange={ this.onInputChange } />
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
    </section>
  );
}
}

export default App;
