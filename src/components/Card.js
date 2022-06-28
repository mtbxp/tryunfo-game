import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  cartaTrunfo = (trunfoCard) => {
    if (trunfoCard === true) {
      return <p data-testid="trunfo-card">Super Trunfo</p>;
    }
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.map((cartas) => {
            const { cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo } = cartas;
            return (
              <div key={ cardName }>
                <h3 data-testid="name-card">{ cardName }</h3>
                <img src={ cardImage } alt={ cardName } data-testid="image-card" />
                <p data-testid="description-card">{ cardDescription }</p>
                <h5 data-testid="attr1-card">{ cardAttr1 }</h5>
                <h5 data-testid="attr2-card">{ cardAttr2 }</h5>
                <h5 data-testid="attr3-card">{ cardAttr3 }</h5>
                <p data-testid="rare-card">{ cardRare }</p>
                { this.cartaTrunfo(cardTrunfo) }
              </div>
            );
          })
        }
      </div>
    );
  }
}

Card.propTypes = {
  cards: PropTypes.arrayOf.isRequired,
};

export default Card;
