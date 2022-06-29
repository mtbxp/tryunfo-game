import React from 'react';
import Form from './components/Form';
import './App.css';
import CardDeck from './components/CardDeck';
import Card from './components/Card';
import Data from './Data';

const ruleMaxTotalScore = 210;
const ruleMaxIndScore = 90;
const ruleMinIndScore = 0;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: ruleMinIndScore,
      cardAttr2: ruleMinIndScore,
      cardAttr3: ruleMinIndScore,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      sumAtt: ruleMaxTotalScore,
      cards: Data,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validationButton());
  }

  hasTrunfoUpdate = () => {
    const { cards } = this.state;
    this.setState({
      hasTrunfo: cards.some((item) => item.cardTrunfo === true),
    });
  }

  addNewCard = (newCard) => {
    this.setState((prevState) => ({
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
      cards: [newCard, ...prevState.cards],
    }), () => this.hasTrunfoUpdate());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.addNewCard(this.state);
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
      cardRare, cardTrunfo, isSaveButtonDisabled,
      sumAtt, cards, hasTrunfo } = this.state;

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
            hasTrunfo={ hasTrunfo }
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
        <section className="Deck">
          {cards.map((item) => (
            <CardDeck
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
              key={ item.cardName }
            />))}
        </section>
      </main>
    );
  }
}

export default App;
