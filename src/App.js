import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      savedCard: [],
    };
  }

  validateBtn = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    const textArr = [cardName, cardDescription, cardImage, cardRare];
    const numbersArr = [cardAttr1, cardAttr2, cardAttr3];
    const maxTotal = 210;
    const maxSingleAtr = 90;

    const maxLength = textArr.every((el) => el.length > 0);
    const maxValue = numbersArr.reduce((acc, curr) => acc + Number(curr), 0) <= maxTotal;
    const minValue = numbersArr.every((el) => el >= 0 && el <= maxSingleAtr);

    return ![maxLength, maxValue, minValue].every((el) => el === true);
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateBtn(),
    }));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const save = this.state;
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((previousSave) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCard: [...previousSave.savedCard, save],
    }));
  }

  deleteCardBtn = (name) => {
    const { savedCard } = this.state;
    const validateTrunfo = savedCard.find((el) => el.cardName === name).cardTrunfo;
    if (validateTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState((previousSave) => ({
      savedCard: previousSave.savedCard.filter((el) => el.cardName !== name),
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      savedCard } = this.state;

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
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
          savedCard.map((el) => (
            <div key={ el.cardName }>
              <Card
                cardName={ el.cardName }
                cardDescription={ el.cardDescription }
                cardAttr1={ el.cardAttr1 }
                cardAttr2={ el.cardAttr2 }
                cardAttr3={ el.cardAttr3 }
                cardImage={ el.cardImage }
                cardRare={ el.cardRare }
                cardTrunfo={ el.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCardBtn(el.cardName) }
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
