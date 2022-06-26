import React from 'react';
import PropTypes from 'prop-types';

class Cartas extends React.Component {
  Mapear(cards) {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = cards;
    console.log(cards);
    return (

      <div className="card" key={ cardName }>
        <h1 data-testid="name-card" className="texto-h1">
          {' '}
          {cardName}
        </h1>
        <p className="container-foto">
          cardImage:
          {' '}
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="foto"
          />
        </p>
        <p data-testid="description-card">
          cardDescription:
          {' '}
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          cardAttr1:
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          cardAttr2:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          cardAttr3:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          cardRare:
          {' '}
          {cardRare}
        </p>
        <p data-testid="rare-card">
          cardRare:
          {' '}
          {cardTrunfo}
        </p>
      </div>
    );
  }

  render() {
    const { cards } = this.props;
    console.log(cards);
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
