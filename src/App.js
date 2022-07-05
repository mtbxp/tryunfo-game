import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      deck: [],
    };

    this.handleChange = ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;

      this.setState(
        {
          [name]: value,
        },
        () => this.setState(
          {
            isSaveButtonDisabled: this.saveButtonValidation(),
          },
        ),
      );
    };
  }

  saveButtonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const cardAttrMax = 90;
    const cardAttrMin = 0;
    const cardAttrTotal = 210;

    if (
      cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || Number(cardAttr1) > cardAttrMax
      || Number(cardAttr1) < cardAttrMin
      || Number(cardAttr2) > cardAttrMax
      || Number(cardAttr2) < cardAttrMin
      || Number(cardAttr3) > cardAttrMax
      || Number(cardAttr3) < cardAttrMin
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > cardAttrTotal
    ) return true;
    return false;
  }

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

    const currentState = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(
      (prevState) => (
        {
          deck: [{ currentState }, ...prevState.deck],
        }
      ),

      () => this.setState(
        {
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
        },
      ),
    );
  }

  superTrunfoValidation = () => {
    const { deck } = this.state;
    let trunfoCounter = 0;
    deck.forEach((element) => {
      if (element.cardTrunfo === true) trunfoCounter += 1;
    });
    if (trunfoCounter === 1) return true;
    return false;
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
      deck,
    } = this.state;

    return (
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ this.superTrunfoValidation() }
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
        <section>
          {
            deck.map((card) => (
              <Card
                key={ card.currentState.cardName }
                cardName={ card.currentState.cardName }
                cardDescription={ card.currentState.cardDescription }
                cardAttr1={ card.currentState.cardAttr1 }
                cardAttr2={ card.currentState.cardAttr2 }
                cardAttr3={ card.currentState.cardAttr3 }
                cardImage={ card.currentState.cardImage }
                cardRare={ card.currentState.cardRare }
                cardTrunfo={ card.currentState.cardTrunfo }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
