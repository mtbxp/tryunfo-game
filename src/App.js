import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      button: true };
  }

  validateButton = () => {
    const { cardAttr1, cardAttr2, cardAttr3, cardName } = this.state;
    const { cardDescription, cardImage } = this.state;
    const info = [cardName, cardDescription, cardImage];
    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const maxAttribute = 210;
    const maxValue = 90;
    const checkString = info.every((i) => i.length > 0);
    const sum = attrs.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    const checkSum = attrs.every((i) => Number(i) >= 0
    && Number(i) <= maxValue && sum <= maxAttribute);
    this.setState({
      button: !(checkSum && checkString),
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => this.validateButton());
  }

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md;
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, button } = this.state;
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
          isSaveButtonDisabled={ button }
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
