import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardImage: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
    };
  }

  checkInputs = () => {
    const { cardName, cardDescription, cardImage } = this.state;

    if (cardName.length === 0) return true;
    if (cardDescription.length === 0) return true;
    if (cardImage.length === 0) return true;

    return false;
  };

  checkAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attributesNumber = [
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10),
    ];

    const sum = attributesNumber.reduce((acc, cur) => acc + cur);

    const limitSum = 210;
    const limitMax = 90;
    const limitMin = 0;

    if (sum > limitSum) return true;
    if (cardAttr1 < limitMin || cardAttr1 > limitMax) return true;
    if (cardAttr2 < limitMin || cardAttr2 > limitMax) return true;
    if (cardAttr3 < limitMin || cardAttr3 > limitMax) return true;

    return false;
  };

  validationsSave = () => {
    if (this.checkAttributes() === true) return true;
    if (this.checkInputs() === true) return true;
  };

  saveCards = (event) => {
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

    const cardsFineshed = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, cardsFineshed],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardImage: '',
      cardTrunfo: false,
    });
  };

  handleChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
    });

    if (type === 'checkbox') {
      if (checked === true) {
        this.setState({ hasTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
      }
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
      hasTrunfo,
      cards,
    } = this.state;

    return (
      <section className="App">
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
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.validationsSave() }
          onSaveButtonClick={ this.saveCards }
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

        {
          cards.map((item) => {
            const {
              name,
              description,
              attr1,
              attr2,
              attr3,
              image,
              rare,
              trunfo,
            } = item;

            return (
              <Card
                key={ name }
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ trunfo }
              />
            );
          })
        }
      </section>
    );
  }
}

export default App;
