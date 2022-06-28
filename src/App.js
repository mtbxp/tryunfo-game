import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
// import Baralho from './components/Baralho';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB0LbDa6wiwHz6pC76le3tL0g4Zer5bXtiQ&usqp=CAU',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      cardList: [],
      inputSearch: '',
      selectSearch: '',
      trunfoSearch: 'false',
    };
  }

  componentDidMount() {
    this.blockButton();
  }

  setHasTrunfo = () => {
    const { cardList } = this.state;
    return (cardList.find((card) => card.cardTrunfo === true)
      ? this.setState({ hasTrunfo: true }) : this.setState({ hasTrunfo: false }));
  }

  removeCard = ({ target }) => {
    const { cardList } = this.state;
    const filter = cardList.filter((card) => card.cardName !== target.name);
    this.setState({
      cardList: filter,
    }, () => {
      this.setHasTrunfo();
    });
  }

  blockButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const valorMax = 90;
    const valorMin = 0;
    const valorTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const resultadoTotal = 210;
    this.setState({
      isSaveButtonDisabled: (
        cardName === ''
        || cardDescription === ''
        || cardAttr1 === ''
        || Number(cardAttr1) < valorMin
        || Number(cardAttr1) > valorMax
        || cardAttr2 === ''
        || Number(cardAttr2) < valorMin
        || Number(cardAttr2) > valorMax
        || cardAttr3 === ''
        || Number(cardAttr3) < valorMin
        || Number(cardAttr3) > valorMax
        || cardImage === ''
        || valorTotal > resultadoTotal
      ),
    });
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, this.blockButton);
  }

  onSaveButtonClick = () => {
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
    this.setState(({ cardList }) => ({
      cardList: [...cardList, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }, this.setHasTrunfo());
    });
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
      cardList,
      isSaveButtonDisabled,
      inputSearch,
      selectSearch,
      trunfoSearch,
      hasTrunfo,
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
          preview
          removeCard={ this.removeCard }
        />
        <section>
          <input
            data-testid="name-filter"
            value={ inputSearch }
            onChange={ this.onInputChange }
            type="text"
            name="inputSearch"
            placeholder="nome..."
          />
          <label htmlFor="selectSearch">
            <select
              data-testid="rare-filter"
              id="selectSearch"
              name="selectSearch"
              value={ selectSearch }
              onChange={ this.onInputChange }
            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="Trunfo">
            Trunfo
            <input
              data-testid="trunfo-filter"
              id="Trunfo"
              name="trunfoSearch"
              value={ trunfoSearch }
              onChange={ this.onInputChange }
              type="checkbox"
            />
          </label>
        </section>
        <section>
          {trunfoSearch === true
            ? cardList
              .filter((card) => card.cardTrunfo === true)
              .map((card) => (
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  preview={ false }
                  removeCard={ this.removeCard }
                />
              ))
            : <Deck
                inputSearch={ inputSearch }
                selectSearch={ selectSearch }
                data={ cardList }
                removeCard={ this.removeCard }
            />}
        </section>
      </div>
    );
  }
}

export default App;
