import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();
    this.isTrunfo = this.isTrunfo.bind(this);
  }

  isTrunfo() {
    const { cardTrunfo } = this.props;
    if (cardTrunfo === true) {
      return (
        <p data-testid="trunfo-card">Super Trunfo</p>
      );
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <br />
        <img src={ cardImage } data-testid="image-card" alt={ `${cardName}` } />
        <br />
        <p data-testid="description-card">{ cardDescription }</p>
        <br />
        <h3>Atributo 1:</h3>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <br />
        <h3>Atributo 2:</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <br />
        <h3>Atributo 3:</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <br />
        <h4>Raridade:</h4>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        <br />
        <div>{ this.isTrunfo() }</div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
