import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import PlaceHolder from '../../assets/placeholder-image-300x225.png';
import Tryunfo from '../../assets/trunfo.png';

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

    const ranks = {
      normal: 'B',
      raro: 'A',
      'muito raro': 'SS',
    };
    const rank = ranks[cardRare];

    return (
      <div className="card__character">
        <div className="card__name-rank">
          <h3 className="card__name" data-testid="name-card">{cardName}</h3>
          <div className="container__rarity">
            <h4>{`Rank ${rank}`}</h4>
            <p className="card__rarity" data-testid="rare-card">{cardRare}</p>
          </div>
        </div>
        <img
          className="card__image"
          src={ cardImage || PlaceHolder }
          alt={ cardName }
          data-testid="image-card"
        />
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
        {cardTrunfo && (
          <div className="container__trunfo">
            <div className="card__trunfo" data-testid="trunfo-card">Super Trunfo</div>
            <img src={ Tryunfo } alt="super trunfo" />
          </div>
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
