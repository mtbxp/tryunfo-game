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
    } = this.props;
    return (
      <div id="preview-card">
        <h2 data-testid="name-card">{cardName}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h2 data-testid="description-card">
          Descrição:
          {' '}
          {cardDescription}
        </h2>
        <h2 data-testid="attr1-card">
          Velocidade:
          {' '}
          {cardAttr1}
        </h2>
        <h2 data-testid="attr2-card">
          Força:
          {cardAttr2}
        </h2>
        <h2 data-testid="attr3-card">
          Saúde:
          {cardAttr3}
        </h2>
        <h2 data-testid="rare-card">{cardRare}</h2>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
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
