import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
  handelSuperTrunfo = (cardTrunfo) => {
    const superTrunfo = <span data-testid="trunfo-card">Super Trunfo </span>;
    return cardTrunfo === true ? superTrunfo : '';
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <div data-testid="rare-card">{ cardRare }</div>
        <div>{ this.handelSuperTrunfo(cardTrunfo) }</div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
