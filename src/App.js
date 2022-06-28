import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);

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

  onInputChange({ target }) {
    const { name } = target;
    const value = name === 'cardTrunfo' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateButton(),
    }));
  }

  validateButton() {
    const { cardName,
      cardDescription,
      cardImage, cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const limitIndividualNumber = 90;
    const limitTotalNumber = 210;

    const arrayNumbs = [cardAttr1, cardAttr2, cardAttr3];
    const arrayCaracteres = [cardName, cardDescription, cardImage, cardRare];

    const notEmptys = arrayCaracteres.every((element) => element.length > 0);
    const totalNumber = arrayNumbs
      .every((element) => element > 0 && element <= limitIndividualNumber);
    const totalSumNumbers = arrayNumbs
      .reduce((acc, curr) => acc + curr, 0) <= limitTotalNumber;

    return ![notEmptys, totalNumber, totalSumNumbers]
      .every((element) => element === true);
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
      // hasTrunfo,
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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
