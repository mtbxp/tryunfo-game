import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div>
        <p
          data-testid="name-card"
          name="cardName"
        >
          { cardName }
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          name="cardImage"
        />
        <p
          data-testid="description-card"
          name="cardDescription"
        >
          { cardDescription }
        </p>
        <p
          data-testid="attr1-card"
          name="cardAttr1"
        >
          { cardAttr1 }
        </p>
        <p
          data-testid="attr2-card"
          name="cardAttr2"
        >
          { cardAttr2 }
        </p>
        <p
          data-testid="attr3-card"
          name="cardAttr3"
        >
          { cardAttr3 }
        </p>
        <p
          data-testid="rare-card"
          name="cardRare"
        >
          { cardRare }
        </p>
        { cardTrunfo && <p data-testid="trunfo-card" name="cardTrunfo">Super Trunfo</p> }
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
