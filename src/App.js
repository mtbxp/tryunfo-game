import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // #VQV
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo,
    isSaveButtonDisabled: true,
    // onSaveButtonClick,
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, (() => this.validateButton()));
  }

  validateButton =() => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const attrMax = 90;
    const attrMin = 0;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const sumMax = 210;

    if ((cardName !== '') && (cardImage !== '') && (cardDescription !== '')
      && (attrMin <= cardAttr1) && (attrMax >= cardAttr1)
      && (attrMin <= cardAttr2) && (attrMax >= cardAttr2)
      && (attrMin <= cardAttr3) && (attrMax >= cardAttr3)
      && (sumAttr <= sumMax)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      // hasTrunfo,
      isSaveButtonDisabled,
      // onSaveButtonClick,
    } = this.state;

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
          // hasTrunfo,
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          // onSaveButtonClick,
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
