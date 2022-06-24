import React from 'react';
import Form from './components/Form';
// import Card from './components/Card';

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
      cardRare: false,
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // cardsArray: [],
      // onInputChange: this.onInputChange,
      // onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange() {
    return (
      0
    );
  }

  onSaveButtonClick() {
    return (
      1
    );
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardTrunfo, hasTrunfo, cardRare, isSaveButtonDisabled } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
