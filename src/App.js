import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      hasTrunfo: false,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardLi: [],
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((card) => (
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        hasTrunfo: false,
        cardRare: 'normal',
        cardTrunfo: false,
        cardLi: [...card.cardLi,
          {
            cardName: card.cardName,
            cardDescription: card.cardDescription,
            cardAttr1: card.cardAttr1,
            cardAttr2: card.cardAttr2,
            cardAttr3: card.cardAttr3,
            cardImage: card.cardImage,
            cardRare: card.cardRare,
            cardTrunfo: card.cardTrunfo,
            hasTrunfo: card.hasTrunfo,
          }],
      }
    ));
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  }

  handle = ({ target }) => {
    const { id, checked, value } = target;
    if (id === 'cardTrundo') {
      this.setState({ [id]: checked }, () => this.validateButton());
    } else {
      this.setState({ [id]: value }, () => this.validateButton());
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

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    const textInput = (
      cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0
    );

    const attrTop = (
      attr1 >= 0 && attr1 <= '90'
      && attr2 >= 0 && attr2 <= '90'
      && attr3 >= 0 && attr3 <= '90'
    );
    const attrSum = (
      attr1 + attr2 + attr3 <= '210'
    );

    if (attrTop && attrSum && textInput) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      cardLi,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handle }
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
          { cardLi.map((item, index) => (
            <Card
              key={ index }
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
