import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validate(),
    }));
  }

  onSaveButtonClick() {
    console.log('criei essa budegaaaaaa!!!!');
  }

  validate() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const minValue = 0;
    const maxSumAttr = 211;

    if (cardAttr1 < minValue || cardAttr1 > maxValue
      || cardAttr2 < minValue || cardAttr2 > maxValue
      || cardAttr3 < minValue || cardAttr3 > maxValue
    ) return true;

    const sumAttr = (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3))
    < maxSumAttr;

    return !(cardName && cardDescription && cardImage && sumAttr);
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
    } = this.state;
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...{
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } }
        />
      </>
    );
  }
}

export default App;
