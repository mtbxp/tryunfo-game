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
      cardRare: 'normal',
      cardTrunfo: false,
      buttonSaveDisabled: true,
      arrayCards: [] };
  }

  // desconstruct = () => {
  //   const { cardAttr1, cardAttr2, cardAttr3, cardName } = this.state;
  //   const { cardDescription, cardImage } = this.state;
  // }
  validateButton = () => {
    const { cardAttr1, cardAttr2, cardAttr3, cardName,
      cardDescription, cardImage } = this.state;
    const info = [cardName, cardDescription, cardImage];
    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const maxAttribute = 210;
    const maxValue = 90;
    const checkString = info.every((i) => i.length > 0);
    const sum = attrs.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    const checkSum = attrs.every((i) => Number(i) >= 0
    && Number(i) <= maxValue && sum <= maxAttribute);
    this.setState({
      buttonSaveDisabled: !(checkSum && checkString),
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => this.validateButton());
  }

  onSaveButtonClick = () => {
    const { cardAttr1, cardAttr2, cardAttr3, cardName,
      cardDescription, cardImage, cardRare, cardTrunfo } = this.state;
    const objToArray = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    // this.setState((...args) => { arrayCards.push(args); });
    this.setState((i) => ({ arrayCards: [...i.arrayCards, objToArray] }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  }

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md;
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, buttonSaveDisabled } = this.state;
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
          isSaveButtonDisabled={ buttonSaveDisabled }
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

        {/* {arrayCards.map((i, index) => (
          <div key={ index }>

            <Card
              cardName={ i.cardName }
              cardDescription={ i.cardDescription }
              cardAttr1={ i.cardAttr1 }
              cardAttr2={ i.cardAttr2 }
              cardAttr3={ i.cardAttr3 }
              cardImage={ i.cardImage }
              cardRare={ i.cardRare }
              cardTrunfo={ i.cardTrunfo }
            />

          </div>
        ))} */}

      </div>
    );
  }
}

export default App;
