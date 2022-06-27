import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardTrunfo, cardRare,
    } = this.props;
    return (
      <div className="carde">
        <h1 data-testid="name-card " className="texto-h1">
          {cardName}
        </h1>
        <div className="foti">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="foto"
          />
        </div>

        <p data-testid="description-card" className="desc">
          {cardDescription}
        </p>
        <div className="mb-0">
          <div data-testid="attr1-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-dark progress-bar-animated"
              role="progressbar"
              style={ { width: `${cardAttr1}%` } }
            >
              {' '}
              {cardAttr1}
              {' '}
            </div>
          </div>
          <div data-testid="attr2-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-danger
              progress-bar-animated"
              max={ 90 }
              role="progressbar"
              style={ { width: `${cardAttr2}%` } }
            >
              {' '}
              {cardAttr2}
              {' '}
            </div>
          </div>
          <div data-testid="attr3-card" className="progress w-30" style={ { heigt: 30 } }>
            <div
              className="progress-bar progress-bar-striped bg-black progress-bar-animated"
              role="progressbar"
              style={ { width: `${cardAttr3}%` } }
            >
              {' '}
              {cardAttr3}
              {' '}
            </div>
          </div>
        </div>
        <p className="texto-h1" data-testid="rare-card">{cardRare}</p>

        {cardTrunfo && <p data-testid="trunfo-card" className="p">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardRare: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
