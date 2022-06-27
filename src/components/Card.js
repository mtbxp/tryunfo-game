import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isDeck,
      deletCard,
    } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <h3 data-testid="attr1-card">{cardAttr1}</h3>
        <h3 data-testid="attr2-card">{cardAttr2}</h3>
        <h3 data-testid="attr3-card">{cardAttr3}</h3>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo && (
            <p data-testid="trunfo-card">Super Trunfo</p>
          )
        }
        {
          isDeck && (
            <button
              onClick={ () => deletCard(cardName, cardTrunfo) }
              type="button"
              data-testid="delete-button"
            >
              <span>Excluir</span>
            </button>
          )
        }
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
  hasTrunfo: PropTypes.bool,
  isDeck: PropTypes.bool,
  deletCard: PropTypes.func,
}.isRequired;

export default Card;
