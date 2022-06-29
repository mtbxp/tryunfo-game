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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.handleChange,
      onSaveButtonClick: this.saveCard,
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    }, () => { this.validateSaveBtn(); });
  };

  validateSaveBtn = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    let btnStatus = false;
    const mn = 90;
    const mnMax = 210;
    const attrSome = cardAttr1 + cardAttr2 + cardAttr3;
    if (cardName.length < 1) { btnStatus = true; }
    if (cardDescription.length < 1) { btnStatus = true; }
    if (cardImage.length < 1) { btnStatus = true; }
    if (cardRare.length < 1) { btnStatus = true; }
    if (cardAttr1 > mn || cardAttr1 < 0) { btnStatus = true; }
    if (cardAttr2 > mn || cardAttr2 < 0) { btnStatus = true; }
    if (cardAttr3 > mn || cardAttr3 < 0) { btnStatus = true; }
    if (attrSome > mnMax) { btnStatus = true; }
    this.setState({
      isSaveButtonDisabled: btnStatus,
    });
  };

  saveCard = () => {

  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </>
    );
  }
}

export default App;
