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
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deckCard: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({
        [target.name]: target.checked,
      });
    } else {
      this.setState({
        [target.name]: target.value,
      }, () => this.validateButton());
    }
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    // let ableButton = true;
    const maxSum = 210;
    const maxAttr = 90;
    const minAttr = 0;

    if (
      cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum
      && Number(cardAttr1) <= maxAttr
      && Number(cardAttr1) >= minAttr
      && Number(cardAttr2) <= maxAttr
      && Number(cardAttr2) >= minAttr
      && Number(cardAttr3) <= maxAttr
      && Number(cardAttr3) >= minAttr
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

onSaveButtonClick = (e) => {
  e.preventDefault();
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

  if (cardTrunfo === true) {
    this.setState({ hasTrunfo: true });
  }

  const card = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  };

  this.setState(({ deckCard }) => ({
    deckCard: [card, ...deckCard],
  }));
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
    hasTrunfo,
    deckCard,
  } = this.state;

  // Auxilio do colega Lucas Medeiros que me explicou melhor o conceito de props
  return (
    <div className="container-tryunfo">
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
        isSaveButtonDisabled={ isSaveButtonDisabled }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
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
        isSaveButtonDisabled={ isSaveButtonDisabled }
      />
      <container>
        {
          deckCard.map((card) => (
            <Card
              key={ card.name }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </container>
    </div>
  );
}
}

export default App;
