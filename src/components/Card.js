import React from 'react';
import PropTypes from 'prop-types';
import tryunfo from '../logo-tryunfo.png';

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
        <h1 data-testid="name-card">{cardName}</h1>
        <p data-testid="rare-card">{cardRare}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        {
          cardTrunfo ? (
            <div data-testid="trunfo-card">
              <p>Super Trunfo</p>
              <img src={ tryunfo } alt="Super Trunfo" />
            </div>
          ) : null
        }
        <p data-testid="description-card">{cardDescription}</p>
        <ul>
          <li data-testid="attr1-card">
            Attr01..........
            <span>{cardAttr1}</span>
          </li>
          <li data-testid="attr2-card">
            Attr02..........
            <span>{cardAttr2}</span>
          </li>
          <li data-testid="attr3-card">
            Attr03..........
            <span>{cardAttr3}</span>
          </li>
        </ul>
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
