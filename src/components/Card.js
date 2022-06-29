import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
      <div className="container-card">
        <p data-testid="name-card">{cardName}</p>
        <div className="divImg">
          <img
            className="saidaImg"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div className="containerInputsCard">
          <p data-testid="description-card">{cardDescription}</p>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
          <p data-testid="rare-card">{cardRare}</p>
          {cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
        </div>
      </div>

    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: null,
  cardDescription: null,
  cardAttr1: null,
  cardAttr2: null,
  cardAttr3: null,
  cardImage: null,
  cardRare: null,
  cardTrunfo: null,
};

export default Card;
