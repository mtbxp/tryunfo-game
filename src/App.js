import React from 'react'; // exodia obliterar
import Form from './components/Form';
import Card from './components/Card';
import './Css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.disableButtonEmpty = this.disableButtonEmpty.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
    this.showDeck = this.showDeck.bind(this);

    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCard: [],
      hasTrunfo: false,
    };
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState((previous) => ({
      savedCard: [...previous.savedCard, {
        cardName,
        cardImage,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
      }],
    }), () => this.validateTrunfo());
    this.clearAll();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.disableButtonEmpty(); });
  }

  validateTrunfo() {
    const { savedCard } = this.state;
    savedCard.filter((card) => {
      if (card.cardTrunfo === true) {
        this.setState({
          hasTrunfo: true,
        });
      }
      return false;
    });
  }

  clearAll() {
    this.setState({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
  }

  showDeck() {
    const { savedCard } = this.state;
    return (
      <div id="cart-function">
        { savedCard.map((card) => (<Card
          cardName={ card.cardName }
          cardImage={ card.cardImage }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          key={ card.cardName }
        />))}
      </div>
    );
  }

  disableButtonEmpty() {
    const min = 0;
    const max = 90;
    const maxSum = 210;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (
      cardName.length > 0
      && cardImage.length > 0
      && cardDescription.length > 0
      && cardRare.length > 0
      && parseInt(cardAttr1, 10) >= min
      && parseInt(cardAttr2, 10) >= min
      && parseInt(cardAttr3, 10) >= min
      && parseInt(cardAttr1, 10) <= max
      && parseInt(cardAttr2, 10) <= max
      && parseInt(cardAttr3, 10) <= max
      && (parseFloat(cardAttr1)
      + parseFloat(cardAttr2)
      + parseFloat(cardAttr3))
      <= maxSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1 id="title">Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {this.showDeck()}
      </div>
    );
  }
}

export default App;
