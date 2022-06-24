import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <>
        <h3>Pré-visualização</h3>
        <div>
          <h4 data-testid="name-card">{cardName}</h4>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{cardDescription}</p>
          <ul>
            <li data-testid="attr1-card">{cardAttr1}</li>
            <li data-testid="attr2-card">{cardAttr2}</li>
            <li data-testid="attr3-card">{cardAttr3}</li>
          </ul>
          <span data-testid="rare-card">{cardRare}</span>
          {cardTrunfo === true
            ? <p data-testid="trunfo-card">Super Trunfo</p>
            : <> </>}
        </div>
      </>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
