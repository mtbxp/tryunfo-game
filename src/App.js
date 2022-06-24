import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare: false,
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsArray: [],
      // onInputChange: this.onInputChange,
      // onSaveButtonClick: this.onSaveButtonClick,
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.verifySaveButton = this.verifySaveButton.bind(this);
    this.verifyHasTrunfo = this.verifyHasTrunfo.bind(this);
  }

  onSaveButtonClick() {
    const { cardAttr1, cardAttr2, cardAttr3, cardDescription, cardImage, cardRare,
      cardName, cardTrunfo } = this.state;
    return (
      this.setState((prevState) => ({
        cardsArray: [
          ...prevState.cardsArray,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        // hasTrunfo: this.verifyHasTrunfo()
      }), () => this.verifyHasTrunfo())
    );
  }

  onInputChange(event) {
    console.log('Inputchange')
    const { target } = event;
    if (target.name !== 'cardTrunfo') this.verifySaveButton();

    return (
      this.setState({
        [target.name]: target.value,
      })
    );
  }

  verifySaveButton() {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const isEmpty = [cardName, cardDescription, cardImage, cardRare]
      .map((item) => item.length === 0);
    const isOver210 = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, current) => parseInt(acc, 10) + parseInt(current, 10));
    const maxValue90 = 90;
    const maxValue210 = 210;
    const isValid = [cardAttr1, cardAttr2, cardAttr3]
      .map((item) => item > maxValue90 || item < 0);

    // console.log('attr1', cardAttr1)
    // console.log('isEmpty: ', isEmpty, 'isOver210', isOver210, 'isOver90', isValid)

    if (!isEmpty.includes(true) && !isValid.includes(true) && isOver210 < maxValue210) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  verifyHasTrunfo() {
    const { cardsArray } = this.state;
    console.log(cardsArray.some((card) => card.cardTrunfo));
    if (cardsArray.some((card) => card.cardTrunfo)) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardTrunfo, hasTrunfo, cardRare, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ (cardAttr1) }
          cardAttr2={ (cardAttr2) }
          cardAttr3={ (cardAttr3) }
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
          cardAttr1={ (cardAttr1) }
          cardAttr2={ (cardAttr2) }
          cardAttr3={ (cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
