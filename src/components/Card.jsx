import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  handleCardTrunfoProp = (cardTrunfo) => {
    const trunfo = <span data-testid="trunfo-card">Super Trunfo</span>;
    return cardTrunfo === true ? trunfo : '';
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <span data-testid="name-card">{ cardName }</span>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <article data-testid="description-card">{ cardDescription }</article>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <span data-testid="rare-card">{ cardRare }</span>
        <span>{ this.handleCardTrunfoProp(cardTrunfo) }</span>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
