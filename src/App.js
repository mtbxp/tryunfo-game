import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      /* hasTrunfo, */
      isSaveButtonDisabled: true,
    };
  }

  checkInputs = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage,
    } = this.state;
    const maxValue = 90;
    const maxSum = 210;

    const hasNoEmptyFields = [cardName, cardDescription, cardImage]
      .every((e) => e !== '');

    const isAttrValuesValid = (
      [cardAttr1, cardAttr2, cardAttr3]
        .every((value) => Number(value) <= maxValue
        && Number(value) >= 0 && value !== '')
    && ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum));

    this.setState({
      isSaveButtonDisabled: !(hasNoEmptyFields && isAttrValuesValid),
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.checkInputs);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, /* hasTrunfo, */ isSaveButtonDisabled,
      onSaveButtonClick,
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
          /* hasTrunfo */
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
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
