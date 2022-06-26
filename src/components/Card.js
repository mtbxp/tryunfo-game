import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;

    return (
      <div className="conteinerCard">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/6/61/Naruto-logo-shippuuden.png"
          className="imgNa"
          alt="Logo Nruto"
        />
        <h1 data-testid="name-card" className="titleCard">{`Nome: ${cardName}`}</h1>

        <div className="containerImg">
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="imgCard"
          />
        </div>

        <div className="descCard">
          <span data-testid="description-card">
            {`Descrição: ${cardDescription}`}
          </span>
        </div>

        <div className="conteinerArrtrs">
          <span
            data-testid="attr1-card"
            className="arrtrs"
          >
            {`Força................. : ${cardAttr1}`}

          </span>

          <span
            data-testid="attr2-card"
            className="arrtrs"
          >
            {`Agilidade................. : ${cardAttr2}`}

          </span>

          <span
            data-testid="attr3-card"
            className="arrtrs"
          >
            {`Chakra................. : ${cardAttr3}`}

          </span>

          <span
            data-testid="rare-card"
            className="arrtrs"
          >
            {`Raridade: ${cardRare}`}

          </span>
        </div>

        {cardTrunfo && <p data-testid="trunfo-card" className="supeT">Super Trunfo</p>}

      </div>
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
};

export default Card;
