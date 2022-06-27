import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    };

    this.handleValue = this.handleValue.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
  }

  handleValue({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value,
    }, () => this.handleSaveButton());
  }

  handleSaveButton() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const somaMax = 210;
    const attrMax = 90;
    if (
      cardAttr1 + cardAttr2 + cardAttr3 <= somaMax
      && cardAttr1 <= attrMax
      && cardAttr2 <= attrMax
      && cardAttr3 <= attrMax
      && Math.sign(cardAttr1) === 1
      && Math.sign(cardAttr2) === 1
      && Math.sign(cardAttr3) === 1
      && cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const { cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          // cardName=""
          // cardDescription=""
          // cardAttr1=""
          // cardAttr2=""
          // cardAttr3=""
          // cardImage=""
          // cardRare=""
          // cardTrunfo={ false }
          // hasTrunfo={ false }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleValue }
          // onSaveButtonClick=""
        />
        <Card
          cardName={ cardName }
          onInputChange={ onInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
