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
        <div className="protoCard">
          <p name="name" data-testid="name-card">{ cardName }</p>
          <img
            className="cardImg"
            name="image"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p name="description" data-testid="description-card">{ cardDescription }</p>
          <div className="attr">
            <label htmlFor="attr1">
              Força:
              <p name="attr1" data-testid="attr1-card">{ cardAttr1 }</p>
            </label>
            <label htmlFor="attr2">
              Velocidade:
              <p name="attr2" data-testid="attr2-card">{ cardAttr2 }</p>
            </label>
            <label htmlFor="attr3">
              Agressividade:
              <p name="attr3" data-testid="attr3-card">{ cardAttr3 }</p>
            </label>
          </div>
          <p name="rare" data-testid="rare-card">{ cardRare }</p>
          <h4 name="trunfo" data-testid="trunfo-card">Super Trunfo</h4>
        </div>
      );
    }
    return (
      <div className="protoCard">
        <p name="name" data-testid="name-card">{ cardName }</p>
        <img name="image" src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p name="description" data-testid="description-card">{ cardDescription }</p>
        <div className="attr">
          <label htmlFor="attr1">
            Força:
            <p name="attr1" data-testid="attr1-card">{ cardAttr1 }</p>
          </label>
          <label htmlFor="attr2">
            Velocidade:
            <p name="attr2" data-testid="attr2-card">{ cardAttr2 }</p>
          </label>
          <label htmlFor="attr3">
            Agressividade:
            <p name="attr3" data-testid="attr3-card">{ cardAttr3 }</p>
          </label>
        </div>
        <p name="rare" data-testid="rare-card">{ cardRare }</p>
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
