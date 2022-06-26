import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();

    this.VerificaTrunfo = this.VerificaTrunfo.bind(this);
  }

  VerificaTrunfo(value) {
    if (value === true) {
      return <h2 data-testid="trunfo-card">Super Trunfo</h2>;
    }
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
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt="Nome da carta" data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <h2 data-testid="attr1-card">{cardAttr1}</h2>
        <h2 data-testid="attr2-card">{cardAttr2}</h2>
        <h2 data-testid="attr3-card">{cardAttr3}</h2>
        <h2 data-testid="rare-card">{cardRare}</h2>
        {
          this.VerificaTrunfo(cardTrunfo)
        }
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
