import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [],
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleClick,
    };
  }

  verifyTrunfo = () => {
    const { cardDeck } = this.state;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const hasTrunfo = cardDeck.some((card) => card.cardTrunfo);
    this.setState({
      hasTrunfo,
    });
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    }, () => { this.validateSaveBtn(); });
  };

  validateSaveBtn = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    let disabled = false;
    const mn = 90;
    const mnMax = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const attrSome = attr1 + attr2 + attr3;
    if (cardName.length < 1) { disabled = true; }
    if (cardDescription.length < 1) { disabled = true; }
    if (cardImage.length < 1) { disabled = true; }
    if (cardRare.length < 1) { disabled = true; }
    if (attr1 > mn || attr1 < 0) { disabled = true; }
    if (attr2 > mn || attr2 < 0) { disabled = true; }
    if (attr3 > mn || attr3 < 0) { disabled = true; }
    if (attrSome > mnMax) { disabled = true; }
    this.setState({
      isSaveButtonDisabled: disabled,
    });
  };

  handleClick = (event) => {
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
    };
    const defaultState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.setState((prev) => ({
      cardDeck: [...prev.cardDeck, card], ...defaultState,
    }), () => this.verifyTrunfo());
  };

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

    return (
      <>
        <div className="creator">
          <Form { ...this.state } />
          <Card { ...card } />
        </div>
        <div className="deck">
          {cardDeck.map((cardItem, index) => <Card key={ index } { ...cardItem } />)}
        </div>
      </>
    );
  }
}

export default App;
