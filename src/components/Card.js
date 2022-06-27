import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  // Lógica baseada na dúvida de Victor Yuri Tavares, respondida pelo slack
  handleTrunfoCard = (isSuperTrunfo) => {
    const superTrunfo = <span data-testid="trunfo-card">Super Trunfo</span>;
    return isSuperTrunfo === true ? superTrunfo : '';
  };

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
      <div>
        <span>
          <h2 data-testid="name-card">{ cardName }</h2>
        </span>
        <span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </span>
        <span>
          <h3 data-testid="description-card">{ cardDescription }</h3>
        </span>
        <span>
          <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
        </span>
        <span>
          <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        </span>
        <span>
          <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
        </span>
        <span>
          <h2 data-testid="rare-card">{ cardRare }</h2>
        </span>
        <span>
          { this.handleTrunfoCard(cardTrunfo) }
        </span>

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
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
