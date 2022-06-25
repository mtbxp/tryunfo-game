import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <h1 className="texto-h1">Card Escolhido</h1>
        <p data-testid="name-card">
          cardName:
          {' '}
          {cardName}
        </p>
        <p className="container-foto">
          cardImage:
          {' '}
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="foto"
          />
        </p>
        <p data-testid="description-card">
          cardDescription:
          {' '}
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          cardAttr1:
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          cardAttr2:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          cardAttr3:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          cardRare:
          {' '}
          {cardRare}
        </p>
        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
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
