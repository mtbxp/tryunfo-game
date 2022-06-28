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
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && cardAttr1 <= maxAttr
    && cardAttr1 >= 0
    && cardAttr2 <= maxAttr
    && cardAttr2 >= 0
    && cardAttr3 <= maxAttr
    && cardAttr3 >= 0
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
    } = this.state;
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
          <h1>Tryunfo</h1>
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
        <ul className="deck">
          {
            data.map((card, index) => (
              <li key={ index } className="card" name={ index }>
                <h3>{ card.name }</h3>
                <br />
                <img src={ card.image } alt={ card.name } />
                <br />
                <p>{ card.description }</p>
                <br />
                { (card.isTrunfo) ? <h3>{ men }</h3> : <>---</>}
                <br />
                <div className="attr">
                  <h4>attr1</h4>
                  <h4>{ card.attr.attr1 }</h4>
                </div>
                <div className="attr">
                  <h4>attr2</h4>
                  <h4>{ card.attr.attr2 }</h4>
                </div>
                <div className="attr">
                  <h4>attr3</h4>
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
