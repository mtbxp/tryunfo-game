import React from 'react';
import './Card.css';
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
      <div id="actual-card">

        <header id="header-card">
          <h3 data-testid="name-card">
            { cardName }
          </h3>
          <h4 data-testid="description-card">
            { cardDescription }
          </h4>
          <h4 data-testid="rare-card">
            { cardRare }
          </h4>

          {cardTrunfo ? <h4 data-testid="trunfo-card">Super Trunfo</h4> : ''}

        </header>

        <section id="attr-card">
          <p className="Attributs" data-testid="attr1-card">
            { cardAttr1 }
          </p>
          <p className="Attributs" data-testid="attr2-card">
            { cardAttr2 }
          </p>
          <p className="Attributs" data-testid="attr3-card">
            { cardAttr3 }
          </p>
        </section>

        <section id="img-card">
          <img
            data-testid="image-card"
            width="300px"
            src={ cardImage }
            alt={ cardName }
          />
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
