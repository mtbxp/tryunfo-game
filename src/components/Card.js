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
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p
          data-testid="description-card"
          name="description-card"
        >
          { cardDescription }
        </p>
        <p data-testid="attr1-card" name="attr1-card">
          {cardAttr1 }
        </p>
        <p data-testid="attr2-card" name="attr2-card">
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card" name="attr3-card">
          { cardAttr3 }
        </p>
        <p data-testid="rare-card" name="rare-card">
          { cardRare }
        </p>
        <p
          data-testid="trunfo-card"
          name="trunfo-card"
        >
          { cardTrunfo }
        </p>
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
