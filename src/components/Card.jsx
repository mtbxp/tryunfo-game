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
      // hasTrunfo,
      eraseBtn,
      onClickRemove,
    } = this.props;

    const btn = (
      <button
        data-testid="delete-button"
        type="button"
        onClick={ onClickRemove }
      >
        Excluir

      </button>);

    return (
      <div>
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardImage !== '' ? 'Nome da carta' : '' }
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <h2 data-testid="rare-card">
          { cardRare }
        </h2>
        { cardTrunfo === true
          ? <strong data-testid="trunfo-card"> Super Trunfo </strong> : '' }
        {eraseBtn === true
          ? btn : ''}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  eraseBtn: PropTypes.bool.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  // hasTrunfo:,
};

export default Card;
