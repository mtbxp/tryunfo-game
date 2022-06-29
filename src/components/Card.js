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
      deleteButton,
      removeCards,
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo && (<p data-testid="trunfo-card">Super Trunfo</p>)}
        {deleteButton && (
          <button
            type="button"
            data-testid="delete-button"
            onClick={ () => removeCards(cardName) }
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  removeCards: PropTypes.func.isRequired,
};

export default Card;
