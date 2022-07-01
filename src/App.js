import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

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
      // hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
    console.log(this);
  };

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
    } = this.state;
    console.log('função validateInputs');
    if (cardName || cardDescription || cardImage || cardRare === null) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  validateAttrs = () => {
    console.log('entrou na validateAttrs');
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const array = [cardAttr1, cardAttr2, cardAttr3];
    const QTDMAXATTR = 90;
    const QTDMAXTOTAL = 210;
    if ((cardAttr1 + cardAttr1 + cardAttr3) > QTDMAXTOTAL) {
      this.setState({
        isSaveButtonDisabled: true,
      });
      console.log('validateAttrs');
    }
    if (array.find((cardAttr) => cardAttr > QTDMAXATTR)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
      console.log('validateAttrs');
    }
    if ((cardAttr1 < 0) || (cardAttr2 < 0) || (cardAttr3 < 0)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
      console.log('validateAttrs');
    }
  }

  validateSaveButton = () => {
    this.validateInputs();
    this.validateAttrs();
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <h1>Super Triumph</h1>
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
          onInputChange={ this.onInputChange }
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
      </div>
    );
  }
}

export default App;
