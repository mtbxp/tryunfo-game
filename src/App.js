import React from 'react';
import './style/App.css';
import Card from './components/Card';
import Form from './components/Form';
import Data from './components/Data';

class App extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.inputChangeRules = this.inputChangeRules.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: Data,
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
    };
  }

  inputChange({ target }) {
    const { type, name } = target;
    let value = (type === 'checkbox') ? target.checked : target.value;
    if (type === 'number') {
      if (value === '') {
        value = '0';
      }
      value = parseFloat(value);
    }
    this.setState({
      [name]: value,
    }, () => { this.inputChangeRules(); });
  }

  inputChangeRules() {
    const maxPoints = 210;
    const maxAttr = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    if (cardName !== '' && cardDescription !== ''
    && cardImage !== '' && cardRare !== ''
    && cardAttr1 <= maxAttr && cardAttr1 >= 0
    && cardAttr2 <= maxAttr && cardAttr2 >= 0
    && cardAttr3 <= maxAttr && cardAttr3 >= 0
    && cardAttr1 + cardAttr2 + cardAttr3 <= maxPoints) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  saveCard(card) {
    this.setState((prevState) => ({
      data: [card, ...prevState.data],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  deleteElement(event) {
    const {
      data,
      hasTrunfo,
    } = this.state;
    const list = document.querySelector('.deck');
    list.removeChild(event.nativeEvent.path[1]);
    if (data[event.target.name].isTrunfo === true && hasTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
    data.splice(event.target.name, 1);
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
      data,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;
    console.log(filterTrunfo);
    const men = 'Super Trunfo';
    if (data.some((item) => item.isTrunfo === true) && !hasTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
    return (
      <div>
        <header>
          <h1>Dino Tryunfo</h1>
        </header>
        <div className="createCard">
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
            onInputChange={ this.inputChange }
            onSaveButtonClick={ this.saveCard }
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
        </div>
        <br />
        <form>
          <label htmlFor="nameFilter">
            Filtro por nome:
            <input
              type="text"
              data-testid="name-filter"
              name="nameFilter"
              disabled={ filterTrunfo }
              onChange={ ({ target }) => this.setState({
                filterName: target.value,
              }) }
            />
          </label>
          <label htmlFor="rareFilter">
            <select
              data-testid="rare-filter"
              name="rareFilter"
              disabled={ filterTrunfo }
              onChange={ ({ target }) => this.setState({
                filterRare: (target.value === 'todas') ? '' : target.value,
              }) }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoFilter">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              onChange={ ({ target }) => this.setState({
                filterTrunfo: target.checked,
              }) }
            />
          </label>
        </form>
        <ul className="deck">
          {
            data.filter((item) => ((filterTrunfo)
              ? item.isTrunfo === true
              : item.isTrunfo !== null))
              .filter((item) => item.name.includes(filterName))
              .filter((item) => item.rare.startsWith(filterRare))
              .map((card, index) => (
                <li key={ index } className="card" name={ index }>
                  <h3>{ card.name }</h3>
                  <img src={ card.image } alt={ card.name } />
                  <br />
                  <p>{ card.description }</p>
                  { (card.isTrunfo) ? <h3>{ men }</h3> : <>---</>}
                  <br />
                  <div className="attr">
                    <h4>Altura</h4>
                    <h4>{ card.attr.attr1 }</h4>
                  </div>
                  <div className="attr">
                    <h4>Comprimento</h4>
                    <h4>{ card.attr.attr2 }</h4>
                  </div>
                  <div className="attr">
                    <h4>Peso</h4>
                    <h4>{ card.attr.attr3 }</h4>
                  </div>
                  <br />
                  <h4>{ card.rare }</h4>
                  <br />
                  <button
                    type="button"
                    data-testid="delete-button"
                    name={ index }
                    // onClick={ (event) => this.deleteElement(event) }
                  >
                    Excluir
                  </button>
                </li>))
          }
        </ul>
      </div>
    );
  }
}

export default App;
