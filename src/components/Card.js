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
      <div className="container-card">
        <h2 className="color-title">Fut-Card</h2>
        <p className="color-name" data-testid="name-card">
          <span>Nome: </span>
          { cardName }
        </p>
        <p className="color-name" data-testid="description-card">
          <span>Descrição: </span>
          { cardDescription }
        </p>
        <p className="color-name" data-testid="attr1-card">
          <span>Atributo 1: </span>
          { cardAttr1 }
        </p>
        <p className="color-name" data-testid="attr2-card">
          <span>Atributo 2: </span>
          { cardAttr2}
        </p>
        <p className="color-name" data-testid="attr3-card">
          <span>Atributo 3: </span>
          { cardAttr3 }
        </p>
        Imagem:
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <br />
        <p className="color-name" data-testid="rare-card">
          <span>Raridade: </span>
          { cardRare }
        </p>
        { cardTrunfo
          && <p className="color-name" data-testid="trunfo-card">Super Trunfo</p> }
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
