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
      // hasTrunfo: '',
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (e) => {
    const { name } = e.target;
    const batatinha = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: batatinha,
    });
  }

disableButton = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
  } = this.state;

  const minAttr = 0;
  const maxAttr = 90;
  const max = 210;

  const soma = (Math.round(cardAttr1)
    + Math.round(cardAttr2) + Math.round(cardAttr3)) <= max;

  const maxInput = Math.round(cardAttr1) <= maxAttr
  && Math.round(cardAttr2) <= maxAttr
  && Math.round(cardAttr3) <= maxAttr;

  const minInput = Math.round(cardAttr1) >= minAttr
  && Math.round(cardAttr2) >= minAttr
  && Math.round(cardAttr3) >= minAttr;

  if (cardName.length > 0 && cardImage.length > 0 && cardDescription.length > 0
    && soma && maxInput && minInput) {
    return false;
  }
  return true;
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
    isSaveButtonDisabled,
    onSaveButtonClick,
  } = this.state;

  return (
    <>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        isSaveButtonDisabled={ this.disableButton() }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
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
        isSaveButtonDisabled={ isSaveButtonDisabled }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
      />
    </>
  );
}
}

export default App;
