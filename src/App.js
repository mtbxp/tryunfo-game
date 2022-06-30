import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newCard: [],
      hasTrunfo: false,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      button: true,
      arrayCards: [],
    };
  }

  buttonSave = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const biggerThen = 90;
    const lessThan = 0;
    const sumBiggerThen = 210;
    const pointsCard = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    this.setState({
      button: !(cardName !== ''
        && cardDescription !== ''
        && cardImage !== ''
        && cardAttr1 >= lessThan
        && cardAttr2 >= lessThan
        && cardAttr3 >= lessThan
        && cardAttr1 <= biggerThen
        && cardAttr2 <= biggerThen
        && cardAttr3 <= biggerThen
        && pointsCard <= sumBiggerThen),
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => this.buttonSave());
  };

  thereIsTrunfo = () => {
    const { arrayCards } = this.state;
    const findTrunfo = arrayCards.some((cartCurrent) => cartCurrent.cardTrunfo);
    this.setState({
      hasTrunfo: findTrunfo,
    });
  };

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
        // arrayCards,
      } = this.state;

      const addNewCard = {

        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };

      this.setState((cart) => ({
        arrayCards: [...cart.arrayCards, addNewCard],
      }), () => this.thereIsTrunfo());

      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    }

    render() {
      const {
        newCard,
        hasTrunfo,
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        // isSaveButtonDisabled,
        // onInputChange,
        // onSaveButtonClick,
        button } = this.state;
      return (
        <section>
          <h1>Tryunfo</h1>
          <Form
            hasTrunfo={ hasTrunfo }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ button }
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
          <section>
            {
              newCard.map((cardEvent) => (
                <section key={ cardEvent.cardName }>

                  <Card
                    cardName={ cardEvent.cardName }
                    cardDescription={ cardEvent.cardDescription }
                    cardAttr1={ cardEvent.cardAttr1 }
                    cardAttr2={ cardEvent.cardAttr2 }
                    cardAttr3={ cardEvent.cardAttr3 }
                    cardImage={ cardEvent.cardImage }
                    cardRare={ cardEvent.cardRare }
                    cardTrunfo={ cardEvent.cardTrunfo }
                  />
                </section>))
            }
          </section>
        </section>
      );
    }
}

export default App;
