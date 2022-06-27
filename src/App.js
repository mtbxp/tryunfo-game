import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const initialState = {
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
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSaveButtonClick = () => {};

  onInputChange = (event) => {
    this.setState(
      {
        cardName: event.target.value,
        cardDescription: event.target.value,
        cardAttr1: event.target.value,
        cardAttr2: event.target.value,
        cardAttr3: event.target.value,
        cardImage: event.target.value,
        cardRare: event.target.value,
        cardTrunfo: event.target.value,
      },
      () => console.log(event),
    );
  };

  render() {
    const value = this.state;
    return (
      <div className="father">
        <h1>Tryunfo</h1>
        <Form
          cardName={ value.cardName }
          cardDescription={ value.cardDescription }
          cardAttr1={ value.cardAttr1 }
          cardAttr2={ value.cardAttr2 }
          cardAttr3={ value.cardAttr3 }
          cardImage={ value.cardImage }
          cardRare={ value.cardRare }
          cardTrunfo={ value.cardTrunfo }
          hasTrunfo={ value.hasTrunfo }
          isSaveButtonDisabled={ value.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ value.cardName }
          cardDescription={ value.cardDescription }
          cardAttr1={ value.cardAttr1 }
          cardAttr2={ value.cardAttr2 }
          cardAttr3={ value.cardAttr3 }
          cardImage={ value.cardImage }
          cardRare={ value.cardRare }
          cardTrunfo={ value.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
