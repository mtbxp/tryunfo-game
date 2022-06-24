import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
      <div className="card__character">
        <h3 className="card__name" data-testid="name-card">{cardName}</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p className="card__description" data-testid="description-card">
          {cardDescription}
        </p>
        <div className="container__attr">
          <span className="label__attr">Ninjutsu</span>
          <p className="card__attr" data-testid="attr1-card">{cardAttr1}</p>
        </div>
        <div className="container__attr">
          <span className="label__attr">Genjutsu</span>
          <p className="card__attr" data-testid="attr2-card">{cardAttr2}</p>
        </div>
        <div className="container__attr">
          <span className="label__attr">Taijutsu</span>
          <p className="card__attr" data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <div className="container__rarity">
          <p className="card__rarity" data-testid="rare-card">{cardRare}</p>
        </div>
        {cardTrunfo && (
          <div className="card__trunfo" data-testid="trunfo-card">Super Trunfo</div>
        )}
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
