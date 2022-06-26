/* eslint-disable react/no-unused-state */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './app.css';
import CardsFeito from './components/CardsFeito';

class App extends React.Component {
  constructor() {
    super();
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
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.formsValidation = this.formsValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.estado = this.estado.bind(this);
  }

  onSaveButtonClick(event) {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    event.preventDefault();
    if (cardTrunfo) {
      this.setState((beforeState) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        hasTrunfo: true,
        isSaveButtonDisabled: true,
        cards: [...beforeState.cards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          hasTrunfo: true,
        }],
      }));
    } else {
      this.setState((beforeState) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        isSaveButtonDisabled: true,
        cards: [...beforeState.cards, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
        }],
      }));
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.formsValidation);
  }

  validation(attributes, inputs) {
    const attrs = attributes.map((attribute) => Number(attribute));
    let validation;
    const maxTotalAttr = 210;
    let totalAttr = attrs[0] + attrs[1] + attrs[2];
    const maxAttr = 90;
    const minAttr = 0;

    if (inputs[0] && inputs[1] && inputs[2]) {
      validation = false;
    } else {
      return true;
    }

    if (totalAttr <= maxTotalAttr) {
      validation = false;
    } else {
      return true;
    }

    attrs.forEach((attr) => {
      totalAttr += attr;
      if (attr >= minAttr && attr <= maxAttr) {
        return false;
      }
      validation = true;
    });

    return validation;
  }

  formsValidation() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage } = this.state;
    const attributes = [cardAttr1, cardAttr2, cardAttr3];
    const inputs = [cardName, cardDescription, cardImage];
    this.setState({
      isSaveButtonDisabled: this.validation(attributes, inputs),
    });
  }

  estado() {
    const { hasTrunfo } = this.state;
    if (hasTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      cards } = this.state;
    return (
      <main>
        <div className="centraliza">
          <div className="texto1">
            <Form
              className="texto"
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
            <Card
              className="texto1"
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
            />
          </div>

        </div>
        <CardsFeito
          className="texto1"
          cards={ cards }
          cardTrunfo={ cardTrunfo }
          estado={ this.estado }
        />
      </main>
    );
  }
}

export default App;
