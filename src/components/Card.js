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
      cardTrunfo,
    } = this.props;

    return (
      <div className="container-card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <img height="250px" data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h5 data-testid="description-card">{ cardDescription }</h5>
        <h5 data-testid="attr1-card">{ cardAttr1 }</h5>
        <h5 data-testid="attr2-card">{ cardAttr2 }</h5>
        <h5 data-testid="attr3-card">{ cardAttr3 }</h5>
        <h5 data-testid="rare-card">{ cardRare }</h5>
        { cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : <br />}
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
