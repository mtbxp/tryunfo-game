/* eslint-disable no-magic-numbers */
import React from 'react';
import Card from './components/Card';
import Forms from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,

    };
  }

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sum = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    if (cardName.length <= 1
      || cardDescription.length <= 1
      || cardImage.length <= 1
      || cardRare.length <= 1
      || sum > 210
      || cardAttr1 > 90
      || cardAttr2 > 90
      || cardAttr3 > 90
      || cardAttr1 < 0
      || cardAttr2 < 0
      || cardAttr3 < 0
    ) {
      return true;
    }
  };

  OnInputChange = ({ target }) => {
    this.isSaveButtonDisabled();
    const { name, value, checked } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? checked : value,
    });
  }

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Forms
          onInputChange={ this.OnInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
      </div>
    );
  }
}

export default App;
