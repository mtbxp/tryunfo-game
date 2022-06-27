import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardIndex,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isPreview,
      deleteCard,
    } = this.props;

    const deletBtn = () => {
      if (!isPreview) {
        return (
          <button
            type="submit"
            data-testid="delete-button"
            onClick={ () => deleteCard(cardIndex) }
          >
            Excluir
          </button>);
      }
    };

    return (
      <div className="card-display">
        <div className="card-container">
          <h2 data-testid="name-card">{ cardName }</h2>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <div className="description-container">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="attr-container">
            <p data-testid="attr1-card" className="attr1-container">{ cardAttr1 }</p>
            <p data-testid="attr2-card" className="attr2-container">{ cardAttr2 }</p>
            <p data-testid="attr3-card" className="attr3-container">{ cardAttr3 }</p>
          </div>
          <div className="card-proprieties">
            <p data-testid="rare-card">{ cardRare }</p>
            {cardTrunfo
              && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
        </div>
        {deletBtn()}
      </div>
    );
  }
}

Card.propTypes = {
  cardIndex: PropTypes.number,
  deleteCard: PropTypes.func,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  cardIndex: 0,
  deleteCard: () => {},

};

export default Card;
