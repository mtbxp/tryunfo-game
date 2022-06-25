import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  isTrunfo = (elementValue) => {
    if (elementValue) {
      return (<p data-testid="trunfo-card">Super Trunfo</p>);
    }
  }

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
        <p name="cardName" data-testid="name-card">{cardName}</p>
        <img
          src={ cardImage }
          alt={ cardName }
          name="image-card"
          data-testid="image-card"
        />
        <p name="cardDescription" data-testid="description-card">{cardDescription}</p>
        <p name="cardAttr1" data-testid="attr1-card">{cardAttr1}</p>
        <p name="cardAttr2" data-testid="attr2-card">{cardAttr2}</p>
        <p name="cardAttr3" data-testid="attr3-card">{cardAttr3}</p>
        <p name="cardRare" data-testid="rare-card">{cardRare}</p>
        <div>{this.isTrunfo(cardTrunfo)}</div>
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
