import React from 'react';
import PropTypes from 'prop-types';

class DeckCard extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, deleteCard } = this.props;
    return (
      <div className="deck-card">
        <p
          data-testid="name-card"
        >
          Name:
          { cardName }
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          Descrição do Card:
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Atributo1:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Atributo2:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Atributo3:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          Raridade:
          { cardRare}
        </p>
        { cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p>
          : undefined }
        <button
          type="button"
          onClick={ deleteCard }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    );
  }
}

DeckCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default DeckCard;
