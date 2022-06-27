import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card-preview">
        <p data-testid="name-card">
          Card name:
          { cardName }
        </p>
        <img
          data-testid="image-card"
          className="image"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          Card description:
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Attribute 1:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Attribute 2:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Attribute 3:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          Rarity:
          { cardRare }
        </p>
        { cardTrunfo
        && <p className="trunfo-mark" data-testid="trunfo-card">Super Trunfo</p> }
        {/* O passo anterior foi feito com auxílio da documentação presente em 'https://pt-br.reactjs.org/docs/conditional-rendering.html' */}
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
