import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const {
      savedDeck,
      deleteCard,
    } = this.props;

    const test = () => savedDeck.map((card) => (
      <div className="card-display" key={ card.cardIndex }>
        <div className="card-container">
          <h2 data-testid="name-card">{ card.cardName }</h2>
          <img
            src={ card.cardImage }
            alt={ card.cardName }
          />
          <div className="description-container">
            <p data-testid="description-card">{ card.cardDescription }</p>
          </div>
          <div className="attr-container">
            <p
              data-testid="attr1-card"
              className="attr1-container"
            >
              { card.cardAttr1 }
            </p>
            <p
              data-testid="attr2-card"
              className="attr2-container"
            >
              { card.cardAttr2 }
            </p>
            <p
              data-testid="attr3-card"
              className="attr3-container"
            >
              { card.cardAttr3 }
            </p>
          </div>
          <div className="card-proprieties">
            <p data-testid="rare-card">{ card.cardRare }</p>
          </div>
        </div>
        <button
          type="submit"
          data-testid="delete-button"
          onClick={ () => deleteCard(card.cardIndex) }
        >
          Excluir
        </button>
      </div>
    ));

    return (
      <>
        {test()}
      </>
    );
  }
}

Deck.propTypes = {
  savedDeck: PropTypes.arrayOf(PropTypes.shape({
    cardIndex: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
