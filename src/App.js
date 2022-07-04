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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const card = this.state;
    this.setState((prevState) => ({
      cards: [card, ...prevState.cards],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      hasTrunfo: prevState.cardTrunfo,
    }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.SaveButtonValidate(),
    }));
  }

  SaveButtonValidate = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxAttribute = 90;
    const minAttribute = 0;
    const maxSumAttr = 210;
    const allAttri = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];

    const emptyValidate = (cardName !== '' && cardDescription !== '' && cardImage !== '');
    const SumValidate = allAttri.reduce((acc, num) => acc + num, 0) <= maxSumAttr;
    const AttrBetwn = allAttri.every((num) => num >= minAttribute && num <= maxAttribute);
    const allValidate = [emptyValidate, SumValidate, AttrBetwn];

    return !(allValidate.every((item) => item === true));
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
      cards,
    } = this.state;
    return (
      <>
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
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        />

        {
          cards.map(({
            cardName: cardName1,
            cardDescription: cardDescription1,
            cardAttr1: cardAttr01,
            cardAttr2: cardAttr02,
            cardAttr3: cardAttr03,
            cardImage: cardImage1,
            cardRare: cardRare1,
            cardTrunfo: cardTrunfo1,
          }) => (
            <>
              <h2>Todas as cartas</h2>
              <Card
                key={ `${cardName1} ${cardDescription1}` }
                cardName={ cardName1 }
                cardDescription={ cardDescription1 }
                cardAttr1={ cardAttr01 }
                cardAttr2={ cardAttr02 }
                cardAttr3={ cardAttr03 }
                cardImage={ cardImage1 }
                cardRare={ cardRare1 }
                cardTrunfo={ cardTrunfo1 }
              />
            </>))
        }

      </>
    );
  }
}

export default App;
