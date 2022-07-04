import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardRare,
      cardImage,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
    } = this.props;
    return (
      <section>
        <aside data-testid="name-card">{ cardName }</aside>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <aside data-testid="rare-card">{ cardRare }</aside>
        <aside data-testid="description-card">{ cardDescription }</aside>
        <aside data-testid="attr1-card">{ cardAttr1 }</aside>
        <aside data-testid="attr2-card">{ cardAttr2 }</aside>
        <aside data-testid="attr3-card">{ cardAttr3 }</aside>
        <aside>{ cardTrunfo && <p data-testid="trunfo-card">Super Trunfo </p> }</aside>
      </section>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
