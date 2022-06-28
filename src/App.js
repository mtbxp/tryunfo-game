import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
// import Deck from './components/Deck';

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
      isSaveButtonDisabled: true,
      deck: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateForms = this.validateForms.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.validateForms(); });
  }

  onSaveButtonClick() {
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

    this.setState((prevState) => ({
      deck: [{
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      ...prevState.deck,
      ],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }, () => { this.hasTrunfo(); });
  }

  hasTrunfo() {
    const { deck } = this.state;
    this.setState({
      hasTrunfo: deck.some((e) => e.cardTrunfo === true),
    });
  }

  validateForms() {
    const maxAttrSum = 210;
    const maxAttr = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) >= ''
      && Number(cardAttr1) <= maxAttr
      && Number(cardAttr2) >= ''
      && Number(cardAttr2) <= maxAttr
      && Number(cardAttr3) >= ''
      && Number(cardAttr3) <= maxAttr
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxAttrSum
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      }, () => {});
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
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
      isSaveButtonDisabled,
      hasTrunfo,
      deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="principal">
          <Form
            className="form"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <div className="classPreview">
            <h3>Pré-visualização</h3>
            <Card
              className="card"
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
        </section>
        <div className="deckPreview">
          <h1>Seu Baralho</h1>
          {
            deck.map((card, index) => (
              <Card key={ index } { ...card } />
            ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
