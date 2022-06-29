import React from 'react';
import PropTypes from 'prop-types';
import '../Card.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription, cardAttr1,
      cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo } = this.props;
    const superTrunfo = (
      <p
        data-testid="trunfo-card"
        className="atributos1"
      >
        Super Trunfo
      </p>);
    return (
      <div className="card">
        <div className="nomeCard">
          <label htmlFor="nome">
            <p data-testid="name-card">{ cardName }</p>
          </label>
        </div>

        <div className="imagem">
          <div>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="imagemT"
            />
          </div>
        </div>

        <div className="atributos">
          <p>Descrção:</p>
          <p data-testid="description-card" className="desc">{ cardDescription }</p>
        </div>

        <div className="atributos1">
          <p>Velocidade:</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </div>

        <div className="atributos1">
          <p>Força:</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </div>

        <div className="atributos1">
          <p>Resistencia:</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>

        <div className="atributos1">
          <p>Raridade da carta:</p>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>

        { cardTrunfo ? superTrunfo : <p className="atributos1"> </p>}
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
