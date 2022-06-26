import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
        <p data-testid="description-card">
          Description:
          {' '}
          { cardDescription }
        </p>
        <span data-testid="attr1-card">
          Speed:
          {' '}
          { cardAttr1 }
        </span>
        <span data-testid="attr2-card">
          Speed:
          {' '}
          { cardAttr2 }
        </span>
        <span data-testid="attr3-card">
          Speed:
          {' '}
          { cardAttr3 }
        </span>
        <span data-testid="rare-card">
          Rareness:
          {' '}
          { cardRare }
        </span>
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
