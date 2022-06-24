import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  verifyTrunfo(cardTrunfo) {
    if (cardTrunfo === true) return <p data-testid="trunfo-card">Super Trunfo</p>;
  }

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
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <h2 data-testid="attr1-card">{cardAttr1}</h2>
        <h2 data-testid="attr2-card">{cardAttr2}</h2>
        <h2 data-testid="attr3-card">{cardAttr3}</h2>
        <p data-testid="rare-card">{cardRare}</p>
        {this.verifyTrunfo(cardTrunfo)}
      </div>);
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
