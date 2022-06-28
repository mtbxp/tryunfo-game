import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);

    this.buttonValidation = this.buttonValidation.bind(this);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.buttonValidation);
    // () =>
  }

  buttonValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const twoHundredTen = 210;
    const treeTributte = 90;
    const somTree = parseInt(cardAttr1, 10)
                  + parseInt(cardAttr2, 10)
                  + parseInt(cardAttr3, 10);
    const validationSom = () => {
      if (
        somTree <= twoHundredTen
      && parseInt(cardAttr1, 10) <= treeTributte
      && parseInt(cardAttr2, 10) <= treeTributte
      && parseInt(cardAttr3, 10) <= treeTributte
      && parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr2, 10) >= 0
      && parseInt(cardAttr3, 10) >= 0
      ) return true;
    };
    const valuesEmpty = [cardName, cardDescription, cardImage];
    const dontEmpty = valuesEmpty.every((e) => e !== '');
    if (validationSom() && dontEmpty) {
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
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Project Tryunfo</h1>
        <h2>Forms</h2>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        ,
        <h2> Preview Card </h2>
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
        ,
      </div>
    );
  }
}

export default App;
