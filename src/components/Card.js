import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <h3 data-testid="description-card">{ cardDescription }</h3>
        <h2 data-testid="attr1-card">
          Roteiro:
          { cardAttr1 }
        </h2>
        <h2 data-testid="attr2-card">
          Personagens:
          { cardAttr2 }
        </h2>
        <h2 data-testid="attr3-card">
          Direção:
          { cardAttr3 }
        </h2>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        { cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : undefined }
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
