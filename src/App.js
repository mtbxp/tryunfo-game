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
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.checkMinMax = this.checkMinMax.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const valueState = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valueState,
    },
    () => this.finalCheck());
  }

  handleSaveButton(stateOfButton) {
    this.setState({
      isSaveButtonDisabled: stateOfButton,
    });
  }

  checkMinMax(attribute) {
    const min = 0;
    const max = 90;
    if (attribute < min || attribute > max || attribute.length === 0) {
      return true;
    }
    return false;
  }

  finalCheck() {
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const totalMax = 210;
    const totalMaxValidation = sum > totalMax;
    const array = [this.checkMinMax(cardAttr1),
      this.checkMinMax(cardAttr2),
      this.checkMinMax(cardAttr3),
      totalMaxValidation,
      cardName.length === 0,
      cardDescription.length === 0,
      cardImage.length === 0,
      cardRare.length === 0];
    const check = array.some((element) => element === true);
    this.handleSaveButton(check);
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
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
          onInputChange={ this.handleChange }
        />
      </>
    );
  }
}

export default App;
