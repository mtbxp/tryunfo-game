import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/generic.css';

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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      deck: [],
    };
  }

  validationTrunfo = () => {
    const { deck } = this.state;

    if (deck.length !== 0) {
      return deck.filter(({ cardTrunfo }) => cardTrunfo);
    }
    return false;
  }

  validationForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxTotalAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;

    const sum = (Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3)) <= maxTotalAttr;

    const maxValueImput = Number(cardAttr1) <= maxAttr
    && Number(cardAttr2) <= maxAttr
    && Number(cardAttr3) <= maxAttr;

    const minValueImput = Number(cardAttr1) >= minAttr
    && Number(cardAttr2) >= minAttr
    && Number(cardAttr3) >= minAttr;

    if (cardName && cardDescription && cardImage
      && sum && maxValueImput && minValueImput) {
      return false;
    }
    return true;
  }

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

    this.setState(({ deck: prevDeck }) => ({
      deck: [...prevDeck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.validationTrunfo(),
    }));
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validationForm(),
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
      isSaveButtonDisabled,
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <section>
          <Form
            { ...this.state }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>
        <section>
          <Card
            {
              ...{
                cardName,
                cardDescription,
                cardAttr1,
                cardAttr2,
                cardAttr3,
                cardImage,
                cardRare,
                cardTrunfo,
                deck,
              }
            }
          />
        </section>
        { deck.map((card, index) => (
          <section key={ index }>
            <Card
              { ...card }
            />
          </section>
        ))}
      </div>
    );
  }
}

export default App;
