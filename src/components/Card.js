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
      <section className="card-preview">
        <p data-testid="name-card">
          {
            `Personagem: ${cardName}`
          }
        </p>
        <div>
          Imagem:
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p data-testid="description-card">
          {
            `Descrição: ${cardDescription}`
          }
        </p>
        <p data-testid="attr1-card">
          {
            `Idade: ${cardAttr1}`
          }
        </p>

        <p data-testid="attr2-card">
          {
            `Peso: ${cardAttr2}`
          }
        </p>

        <p data-testid="attr3-card">
          {
            `Altura: ${cardAttr3}`
          }
        </p>

        <p data-testid="rare-card">
          {
            `Especial: ${cardRare}`
          }
        </p>

        {cardTrunfo && (<p data-testid="trunfo-card">Super Trunfo</p>)}
      </section>
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
