import PropTypes from 'prop-types';
import React from 'react';

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
      <>
        <h1 name="cardName" data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h1 data-testid="description-card">{ cardDescription }</h1>
        <h1 data-testid="attr1-card">{ cardAttr1 }</h1>
        <h1 data-testid="attr2-card">{ cardAttr2 }</h1>
        <h1 data-testid="attr3-card">{ cardAttr3 }</h1>
        <h1 data-testid="rare-card">{cardRare}</h1>
        { cardTrunfo === true && <h3 data-testid="trunfo-card">Super Trunfo</h3>}
      </>

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
  cardTrunfo: PropTypes.string.isRequired,

};

export default Card;
