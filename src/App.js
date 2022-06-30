import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';

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
      textFilter: '',
      rarityFilter: 'todas',
      trunfoFilter: false,
      disabled: false,
      savedCards: [],
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

  handleSearchInputs = () => {
    const { trunfoFilter } = this.state;
    return trunfoFilter;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validateBtn(),
      disabled: this.handleSearchInputs(),
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
      savedCards: [...previousSave.savedCards, save],
    }));
  }

  showCardsCollection = () => {
    const { textFilter, savedCards, rarityFilter, trunfoFilter } = this.state;

    if (trunfoFilter) {
      return savedCards.filter(({ cardTrunfo }) => cardTrunfo === true);
    }
    if (rarityFilter !== 'todas') {
      return savedCards.filter(({ cardRare }) => cardRare === rarityFilter);
    }
    return savedCards.filter(({ cardName }) => cardName.includes(textFilter));
  }

  deleteCardBtn = (name) => {
    const { savedCards } = this.state;
    const validateTrunfo = savedCards.find((el) => el.cardName === name).cardTrunfo;
    if (validateTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState((previousSave) => ({
      savedCards: previousSave.savedCards.filter((el) => el.cardName !== name),
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      textFilter, rarityFilter, trunfoFilter, disabled } = this.state;

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
        <Search
          textFilter={ textFilter }
          onInputChange={ this.onInputChange }
          rarityFilter={ rarityFilter }
          trunfoFilter={ trunfoFilter }
          disabled={ disabled }
        />
        {
          this.showCardsCollection().map((el) => (
            <div key={ el.cardName }>
              <Card
                { ...el }
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
