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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      addedCard: [],
    };
  }

  // Submit Button

  enableSubmitButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const maxAttrValue = 90;
    const minAttrValue = 0;
    const sumAttrsValues = 210;

    const totalSum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= sumAttrsValues;

    const verifyEmptyInput = cardName !== ''
    && cardDescription !== ''
    && cardImage !== '';

    this.setState({
      isSaveButtonDisabled: !(Number(cardAttr1) <= maxAttrValue
        && Number(cardAttr1) >= minAttrValue
        && Number(cardAttr2) <= maxAttrValue
        && Number(cardAttr2) >= minAttrValue
        && Number(cardAttr3) <= maxAttrValue
        && Number(cardAttr3) >= minAttrValue
        && totalSum
        && verifyEmptyInput),
    });
  }

  // event Handler genérico

    onInputChange = ({ target }) => {
      const { name, type } = target;
      const value = (type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, () => this.enableSubmitButton());
    }

    // prevent default + addCards (consulta da monitoria)

    onSaveButtonClick = (e) => {
      e.preventDefault();
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

      const cardInfo = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };

      this.setState((previousState) => ({
        addedCard: [...previousState.addedCard, cardInfo] }), () => {
        this.setState(() => ({
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
        }));
      });
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
        addedCard,
      } = this.state;

      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />

          <section className="createdCard">
            {addedCard.map((card) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                hasTrunfo={ card.hasTrunfo }
              />
            ))}
          </section>
        </div>

      );
    }
}

export default App;
