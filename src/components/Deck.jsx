import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component {
  render() {
    return (
      <div>
        {
          cardDeck.map((newCard) => (
            <Card
              key={ newCard }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
            />
          ))
        }
      </div>
    );
  }
}

export default Deck;
