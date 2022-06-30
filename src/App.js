import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
      trunfo: false,
      button: true,
      allCards: [],
      hasTrunfo: false,
      filterCards: [],
      disable: false,
    };
  }

  checkForm = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSumValue = 210;
    const maxValue = 90;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    this.setState({
      button: !(name !== ''
      && description !== ''
      && image !== ''
      // && rare !== ''
      && sum <= maxSumValue
      && attr1 <= maxValue
      && attr2 <= maxValue
      && attr3 <= maxValue
      && attr1 >= 0
      && attr2 >= 0
      && attr3 >= 0),
    });
  }

  // mentoria do Luanderson
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(({
      [name]: value,
    }), () => this.checkForm());
  };

  addNewCard = () => {
    const { name, description, image, attr1, attr2, attr3, rare, trunfo } = this.state;
    const card = { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo };
    this.setState((prevState) => ({
      allCards: [...prevState.allCards, card],
      filterCards: [...prevState.allCards, card],
    }), () => {
      this.setState({
        name: '',
        description: '',
        image: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        rare: '',
        trunfo: false,
        hasTrunfo: this.hasTrunfo(),
      });
    });
  }

  hasTrunfo = () => {
    const { allCards } = this.state;
    return allCards.some((card) => card.trunfo === 'on');
  };

  deleteCard = (cardName) => {
    this.setState((prevState) => ({
      allCards: prevState.allCards.filter((card) => card.name !== cardName),
    }), () => {
      this.setState({
        hasTrunfo: this.hasTrunfo(),
      });
    });
  };

  nameFilter = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      filterCards: prevState.filterCards.filter((card) => card.name.includes(value)),
    }));
  }

  // Marcos Souza sempre proativo e ajudando no raciocínio
  rareFilter = (event) => {
    const { allCards } = this.state;
    const { value } = event.target;
    if (value === 'todas') {
      this.setState({
        filterCards: allCards,
      });
    } else {
      this.setState({
        filterCards: allCards,
      });
      this.setState((prevState) => ({
        filterCards: prevState.filterCards.filter((card) => card.rare === value),
      }));
    }
  }

  trunfoFilter = (event) => {
    const { allCards } = this.state;
    const { checked } = event.target;
    if (checked) {
      this.setState((prevState) => ({
        filterCards: prevState.filterCards.filter((card) => card.trunfo === 'on'),
        disable: true,
      }));
    } else {
      this.setState({
        filterCards: allCards,
        disable: false,
      });
    }
  }

  render() {
    const { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      button,
      hasTrunfo,
      filterCards,
      disable } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ button }
          onSaveButtonClick={ this.addNewCard }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <div>
          <input
            type="text"
            data-testid="name-filter"
            id="name-filter"
            name="name-filter"
            onChange={ this.nameFilter }
            disabled={ disable }
          />
          <select
            data-testid="rare-filter"
            id="rare-filter"
            name="rare-filter"
            onChange={ this.rareFilter }
            disabled={ disable }
          >
            <option value="todas" selected>Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              id="trunfo-filtert"
              name="trunfo-filter"
              onChange={ this.trunfoFilter }
            />
            Super Trunfo
          </label>
        </div>
        <div>
          {filterCards.map((card) => (
            <div key={ card.name }>
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.deleteCard(card.name) }
              >
                Excluir

              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
