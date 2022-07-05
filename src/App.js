import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      deck: [],
    };
  }

  /* Função genérica para lidar com alterações
 */ onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  isSaveButtonDisabled = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const maxTotalScore = 210;
    const maxCardScore = 90;
    const minCardScore = 0;

    if (cardName === '' || cardDescription === ''
    || cardImage === '' || cardRare === '') {
      return true;
    }

    const isSumExceeds = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) > maxTotalScore;

    const isCardInputInvalid = (Number(cardAttr1) > maxCardScore
    || Number(cardAttr1) < minCardScore) || (Number(cardAttr2) > maxCardScore
    || Number(cardAttr2) < minCardScore) || (Number(cardAttr3) > maxCardScore
    || Number(cardAttr3) < minCardScore);

    if (isSumExceeds || isCardInputInvalid) {
      return true;
    }

    return false;
  }

  onSaveButtonClick= (event) => {
    /* Refatorar utilizando prevState */
    event.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, deck } = this.state;

    this.setState({
      deck: [...deck, { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      ],
      hasTrunfo: cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deck } = this.state;
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
          hasTrunfo={ hasTrunfo }
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
        <div>
          <h2>Deck</h2>
          { deck.map((card) => (
            <Card
              key={ cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
