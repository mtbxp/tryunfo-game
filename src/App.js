import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    // eslint-disable-next-line no-lone-blocks

    this.state = {

      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  onInputChange = ({ target }) => {
    console.log(target);
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value },
      () => {
        this.isSaveButtonDisabled();
      });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardList } = this.state;
    const card = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      cardImage: '',
      cardList: [...cardList, card],
    }, () => {
      this.hasTrunfo();
    });
  };

  isSaveButtonDisabled = () => {
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;

    if (cardName !== '' && cardDescription !== ''
      && cardImage !== '' && cardRare !== '') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    const som = 210;
    const limit = 90;
    if (cardAttr1 > limit
      || cardAttr1 < 0
      || cardAttr2 > limit
      || cardAttr2 < 0
      || cardAttr3 > limit
      || cardAttr3 < 0) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    const somatorio = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
    if (somatorio > som) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  hasTrunfo=() => {
    const { cardList } = this.state;
    cardList.forEach((card) => {
      const { cardTrunfo } = card;
      if (cardTrunfo === true) {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
  }

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, isSaveButtonDisabled,
      cardTrunfo, hasTrunfo, cardList } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
        />
        <section>
          {
            cardList.map((card) => (
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardImage={ card.cardImage }
                cardTrunfo={ card.cardTrunfo }
                key={ card.cardName }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
