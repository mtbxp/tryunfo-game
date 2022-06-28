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
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbok' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.enableButton());
  };

  validateTextInput = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) {
      return true;
    }
  }

  validateNumberInput = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValueAtt = 210;
    const maxValue = 90;
    const minValue = 0;
    const sumAllAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (Number(cardAttr1) <= maxValue
      && Number(cardAttr1) >= minValue
      && Number(cardAttr2) <= maxValue
      && Number(cardAttr2) >= minValue
      && Number(cardAttr3) <= maxValue
      && Number(cardAttr3) >= minValue
      && sumAllAtt <= maxValueAtt) {
      return true;
    }
  }

  enableButton = () => {
    if (this.validateNumberInput()
      && this.validateTextInput()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1 id="title">Tryunfo</h1>
        <div className="card-render">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
      </div>
    );
  }
}

export default App;
