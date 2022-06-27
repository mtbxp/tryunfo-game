import React from 'react';
import PropTypes from 'prop-types';

class Cartas extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  Mapear(cards) {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, hasTrunfo, cardRare } = cards;
    return (

      <div className="carde" key={ cardName }>
        <h1 data-testid="name-card " className="texto-h1">
          {cardName}
        </h1>
        <div className="foti">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="foto"
          />
        </div>
        <p data-testid="description-card" className="desc">
          {cardDescription}
        </p>
        <div className="mb-0">
          <div data-testid="attr1-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-dark progress-bar-animated"
              role="progressbar"
              style={ { width: `${cardAttr1}%` } }
            >
              {' '}
              {cardAttr1}
              {' '}
            </div>
          </div>
          <div data-testid="attr2-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-danger
              progress-bar-animated"
              max={ 90 }
              role="progressbar"
              style={ { width: `${cardAttr2}%` } }
            >
              {' '}
              {cardAttr2}
              {' '}
            </div>
          </div>
          <div data-testid="attr3-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-black progress-bar-animated"
              role="progressbar"
              style={ { width: `${cardAttr3}%` } }
            >
              {' '}
              {cardAttr3}
              {' '}
            </div>
          </div>
        </div>

        {
          (!hasTrunfo)
            ? <p className="p"> </p>
            : <p className="p">Super Trunfo </p>
        }

        <p className="texto-h1" data-testid="rare-card">{cardRare}</p>
        <div className="container-bot">
          <button
            type="submit"
            className="botao"
            onClick={ this.remove }
            data-testid="delete-button"
          >
            Remover Carta
          </button>
        </div>

      </div>
    );
  }

  remove(event) {
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
    const { estado } = this.props;
    estado();
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="cardfeitos centraliza">
        {cards.map((card) => (
          this.Mapear(card)
        ))}
      </div>
    );
  }
}

Cartas.propTypes = {
  estado: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
  })).isRequired,

};

export default Cartas;
