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
      if (cardTrunfo) return <div data-testid="trunfo-card">Super Trunfo</div>;
    };

    return (
      <div className="card-container">
        <div data-testid="name-card">
          { cardName }
        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-image"
        />
        <div data-testid="description-card">
          { cardDescription }
        </div>
        <div data-testid="attr1-card" className="attribute">
          { cardAttr1 }
        </div>
        <div data-testid="attr2-card" className="attribute">
          { cardAttr2 }
        </div>
        <div data-testid="attr3-card" className="attribute">
          { cardAttr3 }
        </div>
        <div data-testid="rare-card">
          { cardRare }
        </div>
        {isCardTrunfo()}
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
