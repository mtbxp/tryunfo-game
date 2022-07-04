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
      isSaveButton,
    } = this.props;

    return (
      <div id="divCard">
        <p
          data-testid="name-card"
          className="NomeDoCard"
          onChange={ isSaveButton }
        >
          { cardName }
        </p>
        <img
          className="imgSize"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p
          data-testid="description-card"
          className="DescricaoCard"
          onChange={ isSaveButton }
        >
          { cardDescription }
        </p>
        <p
          data-testid="attr1-card"
          className="Atb1 Atributos"
          onChange={ isSaveButton }
        >
          { cardAttr1 }
        </p>
        <p
          data-testid="attr2-card"
          className="Atb2 Atributos"
          onChange={ isSaveButton }
        >
          { cardAttr2 }
        </p>
        <p
          data-testid="attr3-card"
          className="Atb3 Atributos"
          onChange={ isSaveButton }
        >
          { cardAttr3 }
        </p>
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
  isSaveButton: PropTypes.func.isRequired,
};

export default Card;
