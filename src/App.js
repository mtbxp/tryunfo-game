import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INNITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  savedCard: [],
  // hasTrunfo,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INNITIAL_STATE;
  }

  checkEmpty = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1, cardAttr2,
      cardAttr3,
    } = this.state;

    const minValue = 0;

    const maxValue = 90;

    const maxSum = 210;

    const isNotEmpty = cardName !== '' && cardDescription !== '' && cardImage !== '';

    const minAtribute = Number(cardAttr1) >= minValue
      && Number(cardAttr2) >= minValue
      && Number(cardAttr3) >= minValue;

    const maxPerAtribute = Number(cardAttr1) <= maxValue
      && Number(cardAttr2) <= maxValue
      && Number(cardAttr3) <= maxValue;

    const maxAtributeSum = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3) <= maxSum;

    console.log(minAtribute);

    if (isNotEmpty && minAtribute && maxPerAtribute && maxAtributeSum) {
      return false;
    }
    return true;
  };

    handleChange = ({ target }) => {
      const value = target.type
      === 'checkbox' ? target.checked : target.value;

      this.setState({
        [target.name]: value,
      }, () => this.setState({
        isSaveButtonDisabled: this.checkEmpty(),
      }));
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
        isSaveButtonDisabled,
      } = this.state;

      this.setState((prevState) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        savedCard: [...prevState.savedCard, {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
          isSaveButtonDisabled,
        }],
      }));
    }

    render() {
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        // savedCard,
      } = this.state;

      const cardProps = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
      };

      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card onInputChange={ this.handleChange } { ...cardProps } />
        </div>
      );
    }
}

export default App;
