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
      preview,
      onDeleteButtonClick,
    } = this.props;
    return (
      <section>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <ul>
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
        </ul>
        <span data-testid="rare-card">{cardRare}</span>
        <div>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          {preview && (
            <button
              data-testid="delete-button"
              onClick={ () => onDeleteButtonClick(cardName) }
              type="button"
            >
              Excluir
            </button>
          )}
        </div>
      </section>
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
  preview: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};
export default Card;
