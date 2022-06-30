import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;

    return (
      <div className="cards">
        <h3 data-testid="name-card" name="name-card">
          { cardName }
        </h3>
        <p
          data-testid="description-card"
          name="cardDescription"
        >
          { cardDescription }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="attr1-card" name="attr1-card">
          Attribute 1:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card" name="attr2-card">
          Attribute 2:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card" name="attr3-card">
          Atribute 3:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card" name="rare-card">
          { cardRare }
        </p>
        {cardTrunfo && (
          <p
            data-testid="trunfo-card"
            name="trunfo-card"
          >
            Super Trunfo
          </p>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
