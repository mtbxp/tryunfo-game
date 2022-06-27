import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription, cardAttr1,
      cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="nome">
          Nome:
          <p data-testid="name-card">{ cardName }</p>
        </label>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <label htmlFor="descricao">
          Descrção:
          <p data-testid="description-card">{ cardDescription }</p>
        </label>

        <label htmlFor="attr1">
          Primeiro Atributo:
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </label>

        <label htmlFor="attr2">
          Segundo Atributo:
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </label>

        <label htmlFor="attr3">
          Terceiro Atributo:
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </label>

        <label htmlFor="raridade">
          RAridade da carta:
          <p data-testid="rare-card">{ cardRare }</p>
        </label>

        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p>...</p>}
      </div>
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
};

export default Card;
