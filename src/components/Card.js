import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <h4 data-testid="name-card">
          {`Personagem: ${cardName}`}
        </h4>

        <img data-testid="image-card" alt={ cardName } src={ cardImage } />

        <p data-testid="description-card">
          {`Característica: ${cardDescription} `}
        </p>

        <p data-testid="attr1-card">
          {`Assustador: ${cardAttr1}`}
        </p>

        <p data-testid="attr2-card">
          {`Poder:  ${cardAttr2} ` }
        </p>

        <p data-testid="attr3-card">
          {`Popularidade: ${cardAttr3} ` }
        </p>

        <p data-testid="rare-card">
          {`Raridade: ${cardRare}`}
        </p>

        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo </p> : null }

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
