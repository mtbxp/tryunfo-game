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
        <p value={ cardDescription } data-testid="description-card">descricao</p>
        <p value={ cardAttr1 } data-testid="attr1-card">atrib1</p>
        <p value={ cardAttr2 } data-testid="attr2-card">atrib1</p>
        <p value={ cardAttr3 } data-testid="attr3-card">atrib1</p>
        <p value={ cardRare } data-testid="rare-card">rare</p>
        {(cardTrunfo) ? <p data-testid="trunfo-card">trunfo</p> : null}
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
