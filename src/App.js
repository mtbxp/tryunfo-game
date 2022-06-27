import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
    };
  }

  validateTrunfo = () => {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo: exist }) => exist);
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maximumScore = 210;
    const maxSkillScore = 90;

    const totalScoreOfSkills = ((Number(cardAttr1) <= maxSkillScore)
      && (Number(cardAttr1) >= 0))
      && ((Number(cardAttr2) <= maxSkillScore)
      && (Number(cardAttr2) >= 0))
      && ((Number(cardAttr3) <= maxSkillScore)
      && (Number(cardAttr3) >= 0));

    const allScore = (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)) <= maximumScore;

    return !(!!cardName
      && cardDescription && cardImage && cardRare && allScore && totalScoreOfSkills);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState(({ cards: prevList }) => ({
      cards: [...prevList, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.validateTrunfo(),
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
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
      cards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
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
        {cards.map(
          ({
            cardName: name,
            cardDescription: desc,
            cardAttr1: atr1,
            cardAttr2: atr2,
            cardAttr3: atr3,
            cardImage: img,
            cardRare: rare,
            cardTrunfo: trunfo,
          }) => (
            <Card
              key={ name }
              cardName={ name }
              cardDescription={ desc }
              cardAttr1={ atr1 }
              cardAttr2={ atr2 }
              cardAttr3={ atr3 }
              cardImage={ img }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          ),
        )}
      </div>
    );
  }
}

export default App;
