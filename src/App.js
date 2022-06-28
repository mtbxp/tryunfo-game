import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.buttonConditionsToEnable()); // Ponto de atenção/tirar dúvida
  }

  buttonConditionsToEnable = () => {
    const { cardName, cardImage, cardDescription, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const allAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3); // Necessario transformar em number
    const maxAttr = 90;
    const sunAllAttr = 210;
    // console.log(allAttr);

    if (cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || cardAttr1 > maxAttr || cardAttr1 < 0
      || cardAttr2 > maxAttr || cardAttr2 < 0
      || cardAttr3 > maxAttr || cardAttr3 < 0
      || allAttr > sunAllAttr
    ) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    return this.setState({ isSaveButtonDisabled: false });
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, deck } = this.state;

    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prevState) => ({
      deck: [...deck, { ...prevState.deck,
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo }],
    }), () => this.cleaningInputFields());
  }

  cleaningInputFields = () => {
    // document.querySelector('#text').value = '';
    // document.querySelector('#descricao').value = '';
    // document.querySelector('#image').value = '';
    // document.querySelector('#attr1').value = 0;
    // document.querySelector('#attr2').value = 0;
    // document.querySelector('#attr3').value = 0;
    // document.querySelector('#rarity').value = 'normal';

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
    });
  }

  cardDelete = () => {
    const { cardTrunfo } = this.state;

    document.querySelector('#cardContainer').remove();
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, deck } = this.state;

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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        { deck.map((item) => (

          <div key={ item.cardName } id="cardContainer">
            <Card
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardImage={ item.cardImage }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />

            <button
              type="button"
              data-testid="delete-button"
              onClick={ this.cardDelete }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}
// commit
export default App;
