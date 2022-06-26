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
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  verifyingInputs = (estadoAnterior) => {
    const stateValues = Object.values(estadoAnterior);
    const arrayValues = [
      stateValues[0],
      stateValues[1],
      stateValues[2],
      stateValues[3],
      stateValues[4],
      stateValues[5],
      stateValues[6],
    ];
    const valuesFilter = arrayValues.filter((element) => element === '');
    const attr1 = parseInt(stateValues[2], 10);
    const attr2 = parseInt(stateValues[3], 10);
    const attr3 = parseInt(stateValues[4], 10);
    const sum = parseInt(stateValues[2], 10)
    + parseInt(stateValues[3], 10)
    + parseInt(stateValues[4], 10);
    const maxValueSumAttr = 210;
    const maxValueAttr = 90;
    const minValueAttr = 0;
    if (valuesFilter.length === 0
      && sum <= maxValueSumAttr
      && attr1 <= maxValueAttr
      && attr2 <= maxValueAttr
      && attr3 <= maxValueAttr
      && attr1 >= minValueAttr
      && attr2 >= minValueAttr
      && attr3 >= minValueAttr
    ) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.setState((estadoAnterior) => ({
      isSaveButtonDisabled: this.verifyingInputs(estadoAnterior),
    }));
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo,
      savedCards,
    } = this.state;

    this.setState({
      savedCards: [...savedCards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
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
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
