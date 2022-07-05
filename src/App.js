import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SearchFilters from './components/SearchFilters';

class App extends React.Component {
  constructor(props) {
    super(props);

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
      searchName: '',
      searchRare: 'todas',
      searchTrunfo: false,
    };
  }

  verifyLength = (...inputsForm) => (inputsForm
    .every((input) => input.length > 0));

  verifyMinAndMax = (min, max, ...attrs) => (attrs
    .every((attr) => Number(attr) >= min && Number(attr) <= max));

  verifySum = (maxSum, ...attrs) => (attrs
    .reduce((total, attr) => total + Number(attr), 0) <= maxSum);

  verifyInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validInput = this.verifyLength(cardName, cardDescription, cardImage, cardRare);

    const maxAttr = 90;
    const validAttr = this.verifyMinAndMax(0, maxAttr, cardAttr1, cardAttr2, cardAttr3);

    const maxSum = 210;
    const validSum = this.verifySum(maxSum, cardAttr1, cardAttr2, cardAttr3);

    if (validInput && validAttr && validSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const changeValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: changeValue,
    }, () => this.verifyInputs());
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const card = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, card],
    }));
  };

  handleDeleteButton = ({ target }) => {
    const { hasTrunfo } = this.state;
    if (hasTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState((prevState) => ({
      cards: prevState.cards.filter(({ cardName }) => cardName !== target.id),
    }));
  }

  handleSearchFilter = () => {
    const { cards } = this.state;
    const { searchName, searchRare, searchTrunfo } = this.state;
    const lowerSearchName = searchName.toLowerCase();
    const cardsByTrunfo = cards.filter(({ cardTrunfo }) => cardTrunfo === true);
    const cardsByNames = cards
      .filter(({ cardName }) => (cardName.toLowerCase().includes(lowerSearchName)));
    const cardsByRare = cardsByNames
      .filter(({ cardRare }) => (cardRare === searchRare));

    if (searchTrunfo) {
      console.log(cardsByTrunfo);
      return cardsByTrunfo;
    }
    return (searchRare === 'todas' ? cardsByNames : cardsByRare);
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
      searchName,
      searchRare,
      searchTrunfo,
    } = this.state;

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
        />
        <section className="all-cards">
          <h2>Todas as cartas</h2>
          <SearchFilters
            searchName={ searchName }
            searchRare={ searchRare }
            searchTrunfo={ searchTrunfo }
            onSearchInputChange={ this.onInputChange }
          />
          {
            this.handleSearchFilter()
              .map((card) => (
                <section className="saved-card" key={ card.cardName }>
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
                    data-testid="delete-button"
                    id={ card.cardName }
                    onClick={ this.handleDeleteButton }
                  >
                    Excluir
                  </button>
                </section>
              ))
          }
        </section>
      </div>
    );
  }
}

export default App;
