import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="Card-container">
        <h3 data-testid="name-card">{ cardName }</h3>
        <div className="img-container">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p data-testid="description-card" className="description">{ cardDescription }</p>
        <div className="attr-container">
          <h5 data-testid="attr1-card">
            Health:
            {' '}
            { cardAttr1 }
          </h5>
          <h5 data-testid="attr2-card">
            Melee Damage:
            {' '}
            { cardAttr2 }
          </h5>
          <h5 data-testid="attr3-card">
            Movement Speed:
            {' '}
            { cardAttr3 }
          </h5>
        </div>
        <h5 data-testid="rare-card" className="card-rare">{ cardRare }</h5>
        { cardTrunfo
          ? <h5 data-testid="trunfo-card" className="super-trunfo">Super Trunfo</h5> : ''}
      </div>
    );
  }
}

export default Card;

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
