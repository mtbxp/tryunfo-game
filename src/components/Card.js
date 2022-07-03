import React from 'react';
import PropTypes from 'prop-types';
import tryunfo from '../logo-tryunfo.png';
import '../styles/Card.css';

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
      <div className="card-preview">
        <div className="card">
          <h3 data-testid="name-card">{cardName}</h3>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="image"
          />
          <p data-testid="description-card" className="description">{cardDescription}</p>
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
          <p data-testid="rare-card" className="rarity-area">
            {cardRare}
            {
              cardTrunfo ? (
                <spam data-testid="trunfo-card">
                  <p className="trunfo-text">Super Trunfo</p>
                  <img src={ tryunfo } alt="Super Trunfo" className="logo-trunfo" />
                </spam>
              ) : null
            }
          </p>
        </div>
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
