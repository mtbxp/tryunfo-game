import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
//   handleMsg = (bool) => {
//     bool === false ? 'Super Trunfo' : '';
//   }

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
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <li data-testid="attr1-card">{ cardAttr1 }</li>
        <li data-testid="attr2-card">{ cardAttr2 }</li>
        <li data-testid="attr3-card">{ cardAttr3 }</li>
        <h4 data-testid="rare-card">{ cardRare }</h4>
        <h3 data-testid="trunfo-card">{ cardTrunfo }</h3>
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
