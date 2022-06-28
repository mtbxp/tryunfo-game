import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Div extends Component {
  render() {
    const {
      arrayOfCards,
      removeCard,
    } = this.props;

    const showTrunfo = (card) => {
      if (card) {
        return (
          <div className="attributes">
            <p className="attributes inline">Super Trunfo</p>
          </div>
        );
      }
      return null;
    };

    return (
      <div className="teste-flex-wrap">
        {arrayOfCards.map((card) => (
          <div
            className="card-adicionado
            card-name"
            name={ card.cardName }
            key={ card.cardName }
          >
            <h3>{card.cardName}</h3>
            <img src={ card.cardImage } alt={ card.cardName } />
            <p className="attributes description-card">{card.cardDescription}</p>

            <div className="attributes">
              Força .......................................
              <p className="attributes inline">{card.cardAttr1}</p>
            </div>

            <div className="attributes">
              Velocidade .............................
              <p className="attributes inline">{card.cardAttr2}</p>
            </div>

            <div className="attributes">
              Inteligencia ............................
              <p className="attributes inline">{card.cardAttr3}</p>
            </div>

            <p className="attributes">{card.cardRare}</p>

            {
              showTrunfo(card.cardTrunfo)
            }

            <button
              className="remove-card-button"
              onClick={ removeCard }
              data-testid="delete-button"
              type="submit"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Div.defaultProps = {
  arrayOfCards: [],
};

Div.propTypes = {
  arrayOfCards: PropTypes.arrayOf({
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardRare: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardTrunfo: '',
    hasTrunfo: '',
  }),
  removeCard: PropTypes.func.isRequired,
};

export default Div;
