import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const ruleMaxTotalScore = 210;
const ruleMaxIndScore = 90;
const ruleMinIndScore = 0;

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: ruleMinIndScore,
      cardAttr2: ruleMinIndScore,
      cardAttr3: ruleMinIndScore,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      sumAtt: ruleMaxTotalScore,
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
    const flagVazios = Object.values(states)
      .some((item) => item.length === 0);

    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const total = ruleMaxTotalScore
      - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));

    const flagMaior0 = cardAttr1 >= ruleMinIndScore
      && cardAttr2 >= ruleMinIndScore
      && cardAttr3 >= ruleMinIndScore;
    const flagMenor90 = cardAttr1 <= ruleMaxIndScore
      && cardAttr2 <= ruleMaxIndScore
      && cardAttr3 <= ruleMaxIndScore;
    const flagTotal = total <= ruleMaxTotalScore && total >= 0;

    this.setState({
      isSaveButtonDisabled: flagTotal && flagMaior0 && flagMenor90 ? flagVazios : true,
      sumAtt: total > ruleMaxTotalScore ? ruleMaxTotalScore : total,
    });
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, sumAtt } = this.state;

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
            sumAtt={ sumAtt }
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
