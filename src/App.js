import React from 'react';
// import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

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
      arrayOfCards: [],
      // onInputChange: () => { },
      // onSaveButtonClick: () => { },
    };
  }

  hasTrunfo = (array) => array.some((card) => card.cardTrunfo === true);

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
      const { arrayOfCards } = this.state;
      console.log(arrayOfCards);
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
      console.log('entrou');
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, arrayOfCards,
    } = this.state;

    return (
      <div className="App">
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
        {/* <div className="cardSaved">
          {arrayOfCards.map((card) => (<Card
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
          <button type="submit">Excluir</button>
        </div> */}
        {arrayOfCards.map((card) => (
          <div name={ card.cardName } key={ card.cardName }>
            <h3>{card.cardName}</h3>
            <p>{card.cardDescription}</p>
            <p>{card.cardAttr1}</p>
            <p>{card.cardAttr2}</p>
            <p>{card.cardAttr3}</p>
            <img src={ cardImage } alt={ cardName } />
            <p>{card.cardRare}</p>
            <p>{card.cardTrunfo}</p>
            <button
              onClick={ this.removeCard }
              data-testid="delete-button"
              type="submit"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

// App.propTypes = {
//   onInputChange: PropTypes.func.isRequired,
// };

export default App;
