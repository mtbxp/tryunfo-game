import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  verifyTrunfo(cardTrunfo) {
    if (cardTrunfo === true) return <p data-testid="trunfo-card">Super Trunfo</p>;
  }

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
      <div className="divCard">
        <img
          className="cardTemplate"
          src="https://creative-runeterra.netlify.app/static/media/uncollectable.253ddf35.png"
          alt="Card Template"
        />
        <div className="divIntraCard">
          <img
            data-testid="image-card"
            className="cardImage"
            src={ cardImage }
            alt={ cardName }
          />
          <div className="algo">
            <h1 data-testid="name-card" className="cardName">{ cardName }</h1>
            <p
              className="divCardDescription"
              data-testid="description-card"
            >
              {cardDescription}
            </p>
            <div className="divAttributes">
              <h2 data-testid="attr1-card">{`Ad: ${cardAttr1}`}</h2>
              <h2 data-testid="attr2-card">{`Ap: ${cardAttr2}`}</h2>
              <h2 data-testid="attr3-card">{`Resist: ${cardAttr3}`}</h2>
            </div>
            <p data-testid="rare-card">{cardRare}</p>
            {this.verifyTrunfo(cardTrunfo)}
          </div>
        </div>
      </div>);
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
