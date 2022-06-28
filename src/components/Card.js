import React from 'react';
import PropType from 'prop-types';

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
      preview,
      removeCard,
    } = this.props;
    return (
      <div>
        <h3 data-testid="name-card">{cardName}</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {
          preview === false
          && (
            <button
              type="button"
              data-testid="delete-button"
              name={ cardName }
              onClick={ removeCard }
            >
              Excluir
            </button>)
        }
        {cardTrunfo === true
        && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  preview: PropType.bool.isRequired,
  removeCard: PropType.func.isRequired,
};

export default Card;
