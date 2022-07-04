import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
      <div id="divCard">
        <p data-testid="name-card" className="NomeDoCard">
          { cardName }
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card" className="DescricaoCard">
          { cardDescription }
        </p>
        <p data-testid="attr1-card" className="Atb1 Atributos">{ cardAttr1 }</p>
        <p data-testid="attr2-card" className="Atb2 Atributos">{ cardAttr2 }</p>
        <p data-testid="attr3-card" className="Atb3 Atributos">{ cardAttr3 }</p>
        <p data-testid="rare-card" className="Raridade">{ cardRare }</p>
        { cardTrunfo === true ? (
          <p
            data-testid="trunfo-card"
            className="ST"
          >
            Super Trunfo
          </p>) : (<p className="ST" />)}
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
