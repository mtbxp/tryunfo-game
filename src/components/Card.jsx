import PropTypes from 'prop-types';
import React from 'react';

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
      onDeleteClick,
      id,
      isAnExample,
    } = this.props;

    return (
      <section className="container-card">
        <aside data-testid="name-card">{cardName}</aside>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <aside data-testid="description-card">{cardDescription}</aside>

        <aside data-testid="attr1-card">{cardAttr1}</aside>

        <aside data-testid="attr2-card">{cardAttr2}</aside>

        <aside data-testid="attr3-card">{cardAttr3}</aside>

        <aside data-testid="rare-card">{cardRare}</aside>

        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo </p>}

        {!isAnExample && (
          <button
            data-testid="delete-button"
            type="button"
            onClick={ () => onDeleteClick(id, cardTrunfo) }
          >
            Excluir
          </button>
        )}
      </section>
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
  onDeleteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isAnExample: PropTypes.bool.isRequired,
};

export default Card;
