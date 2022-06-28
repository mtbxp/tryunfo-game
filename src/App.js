import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import data from './data';
import Header from './components/Header';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: data,
      errors: {},
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  addNewCard = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [card, ...prevState.cards],
      errors: {},
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  getErrors = (param) => {
    this.setState(() => ({
      errors: param,
    }));
  }

  render() {
    const {
      cards, cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, errors,
    } = this.state;

    return (
      <div>
        <Header />
        <div className="card-inputs">
          <Form
            addNewCard={ this.addNewCard }
            onInputChange={ this.onInputChange }
            getErrors={ this.getErrors }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            errors={ errors }
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
            list={ false }
          />
        </div>
        <div className="cards">
          {
            cards.map((card) => (
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
                list
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
