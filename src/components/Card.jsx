import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, preview, deleteButtonClick } = this.props;
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="rare-card">{cardRare}</p>

        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo!</p>}
        {preview && (
          <button
            data-testid="delete-button"
            onClick={ () => deleteButtonClick(cardName) }
            type="button"
          >
            Excluir
          </button>
        )}
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
  preview: PropTypes.bool,
  deleteButtonClick: PropTypes.func,
}.isRequired;
