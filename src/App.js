import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckPreview from './components/DeckPreview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  verifyAttributesConditions = (attributes) => {
    const maxPowerByCard = 210;
    const maxPowerByAttr = 90;
    const validation = attributes
      .every((attr) => attr >= 0 && attr <= maxPowerByAttr);
    if (!validation) return validation;
    return attributes.reduce((acc, attr) => acc + attr, 0) <= maxPowerByCard;
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const attrsOk = this.verifyAttributesConditions([
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10)]);
    const fieldsOk = cardName && cardDescription && cardImage && cardRare;
    this.setState({
      isSaveButtonDisabled: !(attrsOk && fieldsOk),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  }

  onSaveButtonClick = (newCard) => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prevState.hasTrunfo ? true : newCard.cardTrunfo,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, newCard],
    }));
  }

  handleDeleteButton = ({ target }) => {
    const { cards } = this.state;
    const { id } = target;
    const itsATrunfo = cards.find((card) => card.cardName === id).cardTrunfo;
    const filteredDeck = cards.filter((card) => card.cardName !== id);
    this.setState((prevState) => ({
      cards: filteredDeck,
      hasTrunfo: itsATrunfo ? false : prevState.hasTrunfo,
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
    return (
      <div>
        <h1>Tryunfo</h1>
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
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            cards={ cards }
          />
          <div className="card-preview">
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
          <DeckPreview cards={ cards } handleDeleteButton={ this.handleDeleteButton } />
        </div>
      </div>
    );
  }
}

export default App;
