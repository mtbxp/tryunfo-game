import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  verifyLength = (...inputsForm) => (inputsForm
    .every((input) => input.length > 0));

  verifyMinAndMax = (min, max, ...attrs) => (attrs
    .every((attr) => Number(attr) >= min && Number(attr) <= max));

  verifySum = (maxSum, ...attrs) => (attrs
    .reduce((total, attr) => total + Number(attr), 0) <= maxSum);

  verifyInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validInput = this.verifyLength(cardName, cardDescription, cardImage, cardRare);

    const maxAttr = 90;
    const validAttr = this.verifyMinAndMax(0, maxAttr, cardAttr1, cardAttr2, cardAttr3);

    const maxSum = 210;
    const validSum = this.verifySum(maxSum, cardAttr1, cardAttr2, cardAttr3);

    if (validInput && validAttr && validSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const changeValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: changeValue,
    }, () => this.verifyInputs());
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const card = this.state;
    const { cardTrunfo } = this.state;
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, card],
    }), () => this.setState({
      hasTrunfo: cardTrunfo,
    }));
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
