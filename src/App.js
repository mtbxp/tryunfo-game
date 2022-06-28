import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// import data from './components/data';

//   this.state = {
//     skins: data,
//   };
// }
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
  }

  validadeNumbersInput = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const totalLimit = 210;
    const inputLimit = 90;
    if (cardAttr1 > inputLimit || cardAttr2 > inputLimit || cardAttr3 > inputLimit) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    return this.setState({
      isSaveButtonDisabled: false,
    });
  }

  handleSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    if ((cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length
    ) > 0) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    return this.setState({
      isSaveButtonDisabled: true,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validadeNumbersInput());
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
        <h1>Tryunfo</h1>
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
            hasTrunfo={ false }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ () => { } }
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
