import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cards } = this.props;
    return (cards.map((card) => (
      <div className="card" key={ cards.name }>
        <h2>{ card.name }</h2>
        <div className="card-container">
          <img
            src={ card.image }
            alt={ `Imagem da carta ${card.name}` }
            className="card-image"
          />
        </div>
        <h4>{ card.description }</h4>
      </div>
    ))
    );
  }
}

Card.propTypes = {
  cards: PropTypes.objectOf.isRequired,
};

export default Card;
