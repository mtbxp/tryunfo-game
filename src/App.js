import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './components/container.css';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onClickRemove = ({ target }) => {
    const list = document.querySelector('.cardList');
    const parentHTML = target.parentNode.innerHTML.includes('Super Trunfo');
    if (parentHTML === true) { this.setState({ hasTrunfo: false }); }
    list.removeChild(target.parentNode);
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const finalValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: finalValue,
    });
  }

  onSaveButtonClick = () => {
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
      isSaveButtonDisabled,
      onClickRemove = this.onClickRemove,
    } = this.state;
    const newCardData = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onClickRemove,
    };
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      hasTrunfo: cardTrunfo,
      cards: [...prevState.cards, newCardData],
    }));
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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    const maxAtrSum = 210;
    const maxNum = 90;
    const notBlank = (cardName && cardDescription && cardImage && cardRare) !== '';
    const Atr1 = parseInt(cardAttr1, 10);
    const Atr2 = parseInt(cardAttr2, 10);
    const Atr3 = parseInt(cardAttr3, 10);
    const atrSum = (Atr1 + Atr2 + Atr3) <= maxAtrSum;
    const AtrNotHigherThan90 = (Atr1 <= maxNum && Atr2 <= maxNum && Atr3 <= maxNum);
    const AtrNotNegative = (Atr1 >= 0 && Atr2 >= 0 && Atr3 >= 0);
    const allTrue = (notBlank && atrSum && AtrNotHigherThan90 && AtrNotNegative) === true;

    return (
      <>
        <div className="container">
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
            isSaveButtonDisabled={ allTrue === true ? false : isSaveButtonDisabled }
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
            eraseBtn={ false }
          />
        </div>
        <ul className="cardList">
          {cards.map((element) => (
            <Card
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardImage={ element.cardImage }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
              onClickRemove={ element.onClickRemove }
              eraseBtn
              key={ element.cardName }
            />))}
        </ul>

      </>
    );
  }
}

export default App;
