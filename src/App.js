import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import './styles/app.css';

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
      cardRare: 'normal',
      cardTrunfo: false,
      remainingPoints: 210,
      cardList: [],
      nameSearch: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: stateValue,
    }, () => {
      if (name.startsWith('cardAttr')) this.calculateRemainingPoints();
    });
  }

  calculateRemainingPoints = () => {
    const maxAttrSum = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    this.setState({
      remainingPoints: (
        maxAttrSum - Number(cardAttr1) - Number(cardAttr2) - Number(cardAttr3)
      ),
    });
  }

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const isValidLength = this.validateLength(cardName, cardDescription, cardImage);

    const maxAttrSum = 210;
    const isValidSum = this.validateSum(maxAttrSum, cardAttr1, cardAttr2, cardAttr3);

    const isValidMin = this.validateMin(0, cardAttr1, cardAttr2, cardAttr3);

    const maxAttrValue = 90;
    const isValidMax = this.validateMax(maxAttrValue, cardAttr1, cardAttr2, cardAttr3);

    return (isValidLength && isValidSum && isValidMin && isValidMax);
  }

  validateLength = (...params) => params.every((param) => param.length > 0);

  validateSum = (maxSum, ...params) => {
    const totalSum = params.reduce((sum, param) => sum + Number(param), 0);
    return totalSum <= maxSum;
  }

  validateMin = (min, ...params) => params.every((param) => Number(param) >= min);

  validateMax = (max, ...params) => params.every((param) => Number(param) <= max);

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCard],
    }), () => this.resetStateAndForm());
  }

  resetStateAndForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      remainingPoints: 210,
    });
  }

  checkHasTrunfo = (dataList) => dataList.some(({ cardTrunfo }) => cardTrunfo);

  handleDeleteCard = ({ target }) => {
    this.setState((prevState) => ({
      cardList: prevState.cardList.filter(({ cardName }) => cardName !== target.id),
    }));
  }

  handleSearch = (searchParam) => {
    const { cardList } = this.state;
    const newList = cardList.filter(({ cardName }) => (
      cardName.toLowerCase().includes(searchParam.toLowerCase())));
    return newList;
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
      remainingPoints,
      cardList,
      nameSearch,
    } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className="add-new-card">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              remainingPoints={ remainingPoints }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ !this.validateForm() }
              onSaveButtonClick={ this.handleSubmit }
              hasTrunfo={ this.checkHasTrunfo(cardList) }
            />
            <div className="card-preview">
              <h3>Pré-Visualização</h3>
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
            </div>
          </section>
          <section className="card-collection">
            <aside className="card-search">
              <h3>🔎 Busca de Cartas</h3>
              <SearchForm
                onSearchChange={ this.handleChange }
                nameSearch={ nameSearch }
              />
            </aside>
            <div className="cards-container">
              <h2>Baralho Tryunfo Pilotos F1</h2>
              {
                this.handleSearch(nameSearch).map((card) => (
                  <div className="card-container" key={ card.cardName }>
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
                      className="delete"
                      id={ card.cardName }
                      onClick={ this.handleDeleteCard }
                    >
                      Excluir
                    </button>
                  </div>
                ))
              }
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
