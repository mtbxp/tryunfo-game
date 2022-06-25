import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    if (cardTrunfo) {
      return (
        <div>
          <p data-testid="name-card">{ cardName }</p>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <ul>
            <li data-testid="attr1-card">{ cardAttr1 }</li>
            <li data-testid="attr2-card">{ cardAttr2 }</li>
            <li data-testid="attr3-card">{ cardAttr3 }</li>
          </ul>
          <p data-testid="rare-card">{ cardRare }</p>
          <h4 data-testid="trunfo-card">Super Trunfo</h4>
        </div>
      );
    }
    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <p data-testid="rare-card">{ cardRare }</p>
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
