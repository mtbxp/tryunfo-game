import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const ruleMaxValue = 210;

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validationButton());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
  }

  validationButton = () => {
    const states = Object.values(this.state);
    const flag = Object.values(states)
      .some((item) => item.length === 0);

    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sumAtt = ruleMaxValue
      - Number(cardAttr1) - Number(cardAttr2) - Number(cardAttr3);
    console.log(sumAtt);
    this.setState({
      isSaveButtonDisabled: flag,
    });
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <div className="Input">
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
            onSaveButtonClick={ this.onSaveButtonClick }
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
      </main>
    );
  }
}

export default App;
