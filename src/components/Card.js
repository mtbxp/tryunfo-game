import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div className="cardDiv">
        <h1 data-testid="name-card">{cardName}</h1>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-image"
        />
        <p data-testid="description-card">{cardDescription}</p>
        <ul>
          <li data-testid="attr1-card">
            Força:
            {cardAttr1}
          </li>
          <li data-testid="attr2-card">
            Velocidade:
            {cardAttr2}
          </li>
          <li data-testid="attr3-card">
            Resistência:
            {cardAttr3}
          </li>
        </ul>
        <p data-testid="rare-card" className="rarity">{cardRare}</p>
        {cardTrunfo
          ? <p data-testid="trunfo-card" className="super-trunfo">Super Trunfo</p> : ''}
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Form;
