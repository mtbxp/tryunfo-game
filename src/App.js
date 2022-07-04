import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    savedCards: [],
  };
  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName= { cardName }
          cardDescription= { cardDescription }
          cardAttr1= { cardAttr1 }
          cardAttr2= { cardAttr2 }
          cardAttr3= { cardAttr3 }
          cardImage= { cardImage }
          cardRare= { cardRare }
          cardTrunfo= { cardTrunfo }
          hasTrunfo= { hasTrunfo }
          isSaveButtonDisabled= { isSaveButtonDisabled }
          onInputChange= { this.handleChange }
          onSaveButtonClick = { this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
