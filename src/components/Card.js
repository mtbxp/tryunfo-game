import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <>
        <p value={ cardName } data-testid="name-card">Card</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p value={ cardDescription }>descricao</p>
        <p value={ cardAttr1 }>atrib1</p>
        <p value={ cardAttr2 }>atrib1</p>
        <p value={ cardAttr3 }>atrib1</p>
        <p value={ cardRare }>rare</p>
        {(cardTrunfo) ? <p>trunfo</p> : null}
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
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
