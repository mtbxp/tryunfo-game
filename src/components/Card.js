import React from 'react';
import PropTypes from 'prop-types';
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

    const isCardTrunfo = () => {
      if (cardTrunfo) {
        return ((
          <div
            data-testid="trunfo-card"
            className="trunfo"
          >
            Super Trunfo
          </div>));
      }
    };

    return (
      <div className="card-container">
        <div data-testid="name-card" className="card-name">
          { cardName }
        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-image"
        />
        <div data-testid="description-card" className="card-description">
          { cardDescription }
        </div>
        <div className="infos-container">
          <div className="attributes-container">
            <div data-testid="attr1-card" className="attribute">
              { `Speed: ${cardAttr1}` }
            </div>
            <div data-testid="attr2-card" className="attribute">
              { `Resistance: ${cardAttr2}` }
            </div>
            <div data-testid="attr3-card" className="attribute">
              { `Ability: ${cardAttr3}` }
            </div>
          </div>
          <div className="rare-trunfo-container">
            <div data-testid="rare-card" className="card-rare">
              { cardRare }
            </div>
            <div>
              {isCardTrunfo()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
