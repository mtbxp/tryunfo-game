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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleChange = ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;

      this.setState(
        {
          [name]: value,
        },
        () => this.setState(
          {
            isSaveButtonDisabled: this.saveButtonValidation(),
          },
        ),
      );
    };
  }

  saveButtonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const cardAttrMax = 90;
    const cardAttrMin = 0;
    const cardAttrTotal = 210;

    if (
      cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || Number(cardAttr1) > cardAttrMax
      || Number(cardAttr1) < cardAttrMin
      || Number(cardAttr2) > cardAttrMax
      || Number(cardAttr2) < cardAttrMin
      || Number(cardAttr3) > cardAttrMax
      || Number(cardAttr3) < cardAttrMin
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > cardAttrTotal
    ) return true;
    return false;
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
        />
      </div>
    );
  }
}

export default App;
