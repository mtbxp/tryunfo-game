import React from 'react';
import '../index.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;

    return (
      <div className="conteinerCard">
        <span data-testid="name-card">{cardName}</span>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <span data-testid="description-card">{cardDescription}</span>

        <span data-testid="attr1-card">{`Atributo: ${cardAttr1}`}</span>

        <span data-testid="attr2-card">{`Atributo: ${cardAttr2}`}</span>

        <span data-testid="attr3-card">{`Atributo: ${cardAttr3}`}</span>

        <span data-testid="rare-card">{`Raridade: ${cardRare}`}</span>

        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}

      </div>
    );
  }
}

export default Card;
