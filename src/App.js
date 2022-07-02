import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

handleChange = ({ target }) => {
  const { name, type } = target;
  const value = type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, this.handleValidation);
}

handleValidation = () => {
  const { cardName, cardDescription, cardAttr1,
    cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
  const attrMax = 90;
  const someMax = 210;
  const some = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

  if (
    cardName.length
    && cardDescription.length
    && cardImage.length
    && cardRare.length > 0
    && cardAttr1 >= 0 && cardAttr1 <= attrMax
    && cardAttr2 >= 0 && cardAttr2 <= attrMax
    && cardAttr3 >= 0 && cardAttr3 <= attrMax
    && some <= someMax
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

handleSave = (event) => {
  event.preventDefault();
  const { cardName, cardDescription, cardAttr1,
    cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, cards } = this.state;

  const card = { cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo };

  this.setState((prevState) => ({
    cards: [card, ...prevState.cards],
  }), () => this.setState({
    hasTrunfo: !!cardTrunfo,
  }));

  this.setState({ cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal' });

  console.log(cardTrunfo);
}

render() {
  const {
    cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, cards,
  } = this.state;
  return (
    <div>
      <h1>Tryunfo do Bebeto</h1>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        onInputChange={ this.handleChange }
        isSaveButtonDisabled={ isSaveButtonDisabled }
        onSaveButtonClick={ this.handleSave }
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
      <div>
        <h2>Cartas Salvas:</h2>
        { cards.map((card) => (
          <Card
            key={ card.cardName }
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
