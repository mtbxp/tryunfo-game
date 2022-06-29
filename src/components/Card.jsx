import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="card">
        <h3 data-testid="name-card">{`Nome: ${cardName}`}</h3>
        <p data-testid="description-card">{`Descrição: ${cardDescription}`}</p>
        <span data-testid="attr1-card">{`Atributo 1: ${cardAttr1}`}</span>
        <span data-testid="attr2-card">{`Atributo 2: ${cardAttr2}`}</span>
        <span data-testid="attr3-card">{`Atributo 3: ${cardAttr3}`}</span>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="rare-card">{`Raridade: ${cardRare}`}</span>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
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
