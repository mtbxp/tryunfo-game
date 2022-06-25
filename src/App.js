import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.infoFormCorrect = this.infoFormCorrect.bind(this);
    this.sumAttributes = this.sumAttributes.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true };
  }


  infoFormCorrect(info) {
    return info.every((i) => i.length > 0);
  }

  sumAttributes(attrs) {
    const maxAttribute = 210;
    const maxValue = 90;
    const value = attrs.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    if (value > maxAttribute) {
      return false;
    }
    if (attrs.some((i) => Number(i) > maxValue || Number(i) < 0)) {
      return false;
    }
    return true;
  }

  onInputChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState(({ [name]: value }), () => {
      this.returnIsSaveButton();
    });
  }

  returnIsSaveButton = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const infoFormValidate = this
      .infoFormCorrect([cardName, cardDescription, cardImage, cardRare]);
    const sumAttributesValidate = this.sumAttributes([cardAttr1, cardAttr2, cardAttr3]);
    const validate = infoFormValidate && sumAttributesValidate;
    if (validate) {
      this.setState({ isSaveButtonDisabled: false });
    }
  }


  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
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
          onInputChange={ this.onInputChange }
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
