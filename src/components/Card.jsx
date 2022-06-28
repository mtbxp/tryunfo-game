import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <div>
          <h5 data-testid="attr1-card">
            Att1:
            { cardAttr1 }
          </h5>
          <h5 data-testid="attr2-card">
            Att2:
            { cardAttr2 }
          </h5>
          <h5 data-testid="attr3-card">
            Att3:
            { cardAttr3 }
          </h5>
        </div>
        <h5 data-testid="rare-card">{ cardRare }</h5>
        { cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
      </div>
    );
  }
}

export default Card;

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
