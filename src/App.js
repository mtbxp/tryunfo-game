import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './components/container.css';

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
      // hasTrunfo: '',
      isSaveButtonDisabled: true,
      onSaveButtonClick: () => {},
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const finalValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: finalValue,
    });
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
      onSaveButtonClick,
    } = this.state;

    const maxAtrSum = 210;
    const maxNum = 90;
    const notBlank = (cardName && cardDescription && cardImage && cardRare) !== '';
    const Atr1 = parseInt(cardAttr1, 10);
    const Atr2 = parseInt(cardAttr2, 10);
    const Atr3 = parseInt(cardAttr3, 10);
    const atrSum = (Atr1 + Atr2 + Atr3) <= maxAtrSum;
    const AtrNotHigherThan90 = (Atr1 <= maxNum && Atr2 <= maxNum && Atr3 <= maxNum);
    const AtrNotNegative = (Atr1 >= 0 && Atr2 >= 0 && Atr3 >= 0);
    const allTrue = (notBlank && atrSum && AtrNotHigherThan90 && AtrNotNegative) === true;
    return (
      <div className="container">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={}
          isSaveButtonDisabled={ allTrue === true ? false : isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        { console.log('--------')}
        { console.log(Atr1 + Atr2 + Atr3)}

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
