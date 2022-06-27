// Project <Tryunfo> from <Larissa Menezes> done in 22.06.24 for the Trybe course, 11th week. It has been used as reference the notes from the class an external links indicated along the code line

import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, this.validateButton);
  }

  validateButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSumAtt = 210;
    const maxAtt = 90;
    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSumAtt
      && Number(cardAttr1) <= maxAtt && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxAtt && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxAtt && Number(cardAttr3) >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  veriryTrunfo = () => {
    const { myCards } = this.state;
    if (myCards.length === 0) return false;
    return !myCards.every((card) => card.cardTrunfo === false);
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((estadoAnterior) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      myCards: [newCard, ...estadoAnterior.myCards],
    }), () => this.setState({ hasTrunfo: this.veriryTrunfo() }));
  }

  deleteCard = (cardName, cardTrunfo) => {
    const { myCards: lastCards } = this.state;
    this.setState({ myCards: lastCards.filter((card) => card.cardName !== cardName) });
    if (cardTrunfo) this.setState(() => ({ hasTrunfo: false }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo, myCards } = this.state;
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <header>Add new card</header>
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
        <ul>
          All the cards:
          {
            myCards.map((card) => (
              <li key={ cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                {/* <button
                  type="button"
                  onClick={
                    this.setState({ myCards: lastCards.filter((card) => card.cardName !== cardName) }, () => ({ hasTrunfo: this.veriryTrunfo() })),
                  }
                  data-testid="delete-button"
                >
                  Excluir
                </button> */}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
