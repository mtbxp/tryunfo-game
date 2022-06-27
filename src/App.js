import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.sumAttributes = this.sumAttributes.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validation = this.validation.bind(this);
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

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => {
      this.validateButton();
    });
  }

  validateButton = () => {
    const { attr1, attr2, attr3, cardName, cardDescription, cardImage } = this.state;
    const info = [cardName, cardDescription, cardImage];
    const attrs = [attr1, attr2, attr3];
    const infoFormCorrect = () => info.every((i) => i.length > 0);
    const sumAttributes = () => {
      const maxAttribute = 210;
      const maxValue = 90;
      const foo = attrs.reduce((acc, cur) => Number(acc) + Number(cur), 0);
      if (foo > maxAttribute) {
        return false;
      }
      if (attrs.some((i) => Number(i) > maxValue || Number(i) < 0)) {
        return false;
      }
      return true;
    };
    const validate = infoFormCorrect() && sumAttributes();
    if (validate) {
      this.state.isSaveButtonDisabled = false;
    }
  }

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md;
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
