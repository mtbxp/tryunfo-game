import React from 'react';
import { Card } from './components/Card';
import { Form } from './components/Form';

class App extends React.Component {
  // Limpa o Estado, zerando
  emptyFormState = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  constructor(props) {
    super(props);
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
      cardDeck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.enableSaveButton = this.enableSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  onSaveButtonClick(e) {
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
      hasTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    if (cardTrunfo) {
      this.setState(() => ({ hasTrunfo: true }));
    }

    this.setState((prevState) => ({ cardDeck: [...prevState.cardDeck, card] }),
      () => this.setState(this.emptyFormState));
  }

  onDeleteButtonClick(cardToDelete) {
    if (cardToDelete.cardTrunfo) {
      this.setState(() => ({ hasTrunfo: false }));
    }

    const { cardDeck } = this.state;

    const newDeck = cardDeck
      .filter((eachCard) => eachCard
        .cardName !== cardToDelete.cardName);

    this.setState(() => ({ cardDeck: newDeck }),
      () => this.setState(this.emptyFormState));
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => this.enableSaveButton());
  }

  enableSaveButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attrSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= +'90'
      && cardAttr2 <= +'90'
      && cardAttr3 <= +'90'
      && attrSum < Number('211')
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
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
      hasTrunfo,
      cardDeck,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {
          cardDeck.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                className="deleteButton"
                data-testid="delete-button"
                onClick={ () => this.onDeleteButtonClick(card) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
