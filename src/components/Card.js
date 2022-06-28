import React from 'react';
import propTypes from 'prop-types';

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
    const trunfo = cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '';
    return (
      <div className="card">
        <h2 data-testid="name-card" className="card-name">{ cardName }</h2>
        <p data-testid="rare-card" className="card-rare">{ cardRare }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" className="card-desc">{ cardDescription }</p>
        <p data-testid="attr1-card" className="card-attr">{ cardAttr1 }</p>
        <p data-testid="attr2-card" className="card-attr">{ cardAttr2 }</p>
        <p data-testid="attr3-card" className="card-attr">{ cardAttr3 }</p>

        {trunfo}
      </div>
    );
  }
}

export default Card;

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
