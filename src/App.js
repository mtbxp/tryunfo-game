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
      isSaveButtonDisabled: true,
    };
  }

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sumAll = 210;
    const maxPointsAtt = 90;
    const zeroPoints = 0;

    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') {
      return true;
    }

    if (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    > sumAll) {
      return true;
    }

    if (Number(cardAttr1) > maxPointsAtt
    || Number(cardAttr2) > maxPointsAtt
    || Number(cardAttr3) > maxPointsAtt) {
      return true;
    }

    if (Number(cardAttr1) < zeroPoints
    || Number(cardAttr2) < zeroPoints
    || Number(cardAttr3) < zeroPoints) {
      return true;
    }

    return false;
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validationButton(),
    }));
  };

  // onSaveButtonClick = (event) => {
  //   event.preventDefault();
  // }

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
