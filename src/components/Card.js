import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  showRarity = (callback) => {
    if (callback) {
      return <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>;
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <h4 data-testid="name-card">{ cardName }</h4>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card" className="yellow">
          FORÇA:
          { ` ${cardAttr1}` }
        </p>
        <p data-testid="attr2-card" className="red">
          ATAQUE:
          { ` ${cardAttr2}` }
        </p>
        <p data-testid="attr3-card" className="green">
          DEFESA:
          { ` ${cardAttr3}` }
        </p>
        <p className="orange">
          AGILIDADE:
          { ` ${cardAttr4}` }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        { this.showRarity(cardTrunfo) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr4: PropTypes.string,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  cardAttr4: '0',
};

export default Card;
