import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Card extends Component {
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

    let trunfo;
    if (cardTrunfo) {
      trunfo = <p className="cardTrunfo" data-testid="trunfo-card">Super Trunfo</p>;
    }

    return (
      <div>
        <h3 className="cardName" data-testid="name-card">{ cardName }</h3>
        <p
          className="cardDescription"
          data-testid="description-card"
        >
          { cardDescription }
        </p>
        <p className="cardAttr01" data-testid="attr1-card">{ cardAttr1 }</p>
        <p className="cardAttr02" data-testid="attr2-card">{ cardAttr2 }</p>
        <p className="cardAttr03" data-testid="attr3-card">{ cardAttr3 }</p>
        <img
          className="cardImage"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p className="cardRare" data-testid="rare-card">{ cardRare }</p>
        { trunfo }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
}.isRequired;

export default Card;
