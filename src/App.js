import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      cards: [],
    };
  }

  handler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      hasTrunfo: this.checkTrunfo(),
    });
  }

  checkTrunfo = () => {
    const { cards } = this.state;
    if ((cards.filter((card) => card.trunfo === true)).length > 0) return true;
    return false;
  }

  checkNewTrunfo = (card) => {
    if (card.trunfo) return true;
    return false;
  }

  deleteButton = ({ target }) => {
    const { name } = target;
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card) => card.name !== name),
    }, () => {
      this.setState({
        hasTrunfo: this.checkTrunfo(),
      });
    });
  }

  saveCard() {
    const { name, description, image, attr1, attr2, attr3, rare, trunfo } = this.state;
    const newCard = {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
    };
    this.setState((state) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      cards: [...state.cards, newCard],
      hasTrunfo: this.checkNewTrunfo(newCard),
    }));
  }

  enableButton() {
    const { state } = this;
    const a1 = parseInt(state.attr1, 10);
    const a2 = parseInt(state.attr2, 10);
    const a3 = parseInt(state.attr3, 10);
    const maxAttr = 90;
    const attrSum = 210;

    if (state.name !== ''
        && state.description !== ''
        && state.image !== ''
        && state.rare !== ''
        && a1 <= maxAttr
        && a1 >= 0
        && a2 <= maxAttr
        && a2 >= 0
        && a3 <= maxAttr
        && a3 >= 0
        && a1 + a2 + a3 <= attrSum
    ) return false;
    return true;
  }

  render() {
    const { state } = this;
    const { cards } = state;
    return (
      <div>
        <h1>TRYUNFO</h1>
        <Form
          cardName={ state.name }
          cardDescription={ state.description }
          cardImage={ state.image }
          cardRare={ state.rare }
          cardTrunfo={ state.trunfo }
          cardAttr1={ state.attr1 }
          cardAttr2={ state.attr2 }
          cardAttr3={ state.attr3 }
          hasTrunfo={ state.hasTrunfo }
          onInputChange={ this.handler }
          isSaveButtonDisabled={ this.enableButton() }
          onSaveButtonClick={ this.saveCard }
        />
        <Card
          cardName={ state.name }
          cardDescription={ state.description }
          cardImage={ state.image }
          cardAttr1={ state.attr1 }
          cardAttr2={ state.attr2 }
          cardAttr3={ state.attr3 }
          cardRare={ state.rare }
          cardTrunfo={ state.trunfo }
        />
        <div className="deck">
          { cards.map((element) => (
            <div key={ element.name }>
              <Card
                cardName={ element.name }
                cardDescription={ element.description }
                cardImage={ element.image }
                cardAttr1={ element.attr1 }
                cardAttr2={ element.attr2 }
                cardAttr3={ element.attr3 }
                cardRare={ element.rare }
                cardTrunfo={ element.trunfo }
              />
              <button
                type="button"
                name={ element.name }
                data-testid="delete-button"
                onClick={ this.deleteButton }
              >
                Excluir
              </button>
            </div>)) }
        </div>
      </div>
    );
  }
}

export default App;
