import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import array from './arrayOfHeroes';

// console.log(array);

class App extends React.Component {
  constructor() {
    super();

    this.buttonValidation = this.buttonValidation.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayOfCards: array,
      // onInputChange: () => { },
      // onSaveButtonClick: () => { },
    };
  }

  hasTrunfo = (arrayTrocarDps) => arrayTrocarDps.some((card) => card.cardTrunfo === true);

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo, hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.hasTrunfo([...previous.arrayOfCards, newCard]),
      isSaveButtonDisabled: true,
      arrayOfCards: [...previous.arrayOfCards, newCard],
    }), () => {
      // const { arrayOfCards } = this.state;
      // console.log(arrayOfCards);
    });
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.buttonValidation(target);
    });
  }

  buttonValidation = () => {
    const attrMax = 90;
    const max = 210;
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    const arrOfAttr = [cardAttr1, cardAttr2, cardAttr3].map((value) => value)
      .map((value) => parseFloat(value)).reduce((acc, curr) => acc + curr);

    // if (target.type === 'number' && parseFloat(target.value) > attrMaxAllowed) {
    //   this.setState({
    //     [target.name]: attrMaxAllowed,
    //   });
    // }

    if (cardName && cardDescription && cardImage
      && cardRare && arrOfAttr <= max && cardAttr1 >= 0
       && cardAttr2 >= 0 && cardAttr3 >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }

    if (cardAttr1 > attrMax || cardAttr2 > attrMax || cardAttr3 > attrMax) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  removeCard = ({ target }) => {
    const name = target.parentElement.getAttribute('name');
    const { arrayOfCards } = this.state;
    const newArrayOfCards = arrayOfCards.filter((card) => card.cardName !== name);

    const checkbox = newArrayOfCards.some((card) => card.cardTrunfo);
    this.setState({
      arrayOfCards: newArrayOfCards,
    });

    if (!checkbox) {
      // console.log('entrou');
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  // isCardTrunfoTrue = () => {
  //   const { cardTrunfo } = this.state;
  //   console.log(cardTrunfo);
  //   if (!cardTrunfo) {
  //     return null;
  //   }
  //   return <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>;
  // }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, arrayOfCards,
    } = this.state;

    return (
      <div className="App">
        <div className="Form-Card">
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
        </div>
        <h1>Cartas do baralho</h1>
        <div className="teste-flex-wrap">
          {arrayOfCards.map((card) => (
            <div
              className="card-adicionado
              card-name"
              name={ card.cardName }
              key={ card.cardName }
            >
              <h3>{card.cardName}</h3>
              <img src={ card.cardImage } alt={ card.cardName } />
              <p className="attributes description-card">{card.cardDescription}</p>
              <div className="attributes">
                Força .......................................
                <p className="attributes inline">{card.cardAttr1}</p>
              </div>

              <div className="attributes">
                Velocidade .............................
                <p className="attributes inline">{card.cardAttr2}</p>
              </div>

              <div className="attributes">
                Inteligencia ............................
                <p className="attributes inline">{card.cardAttr3}</p>
              </div>

              <p className="attributes">{card.cardRare}</p>

              {/* { this.isCardTrunfoTrue() } */}
              <button
                className="remove-card-button"
                onClick={ this.removeCard }
                data-testid="delete-button"
                type="submit"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
