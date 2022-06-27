import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <br />
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <br />
        <p data-testid="description-card">{ cardDescription }</p>
        <br />
        { (cardTrunfo) ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : <> </>}
        <br />
        <div className="attr">
          <h4>attr1</h4>
          <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
        </div>
        <div className="attr">
          <h4>attr2</h4>
          <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        </div>
        <div className="attr">
          <h4>attr3</h4>
          <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
        </div>
        <br />
        <h4 data-testid="rare-card">{ cardRare }</h4>
        <br />
      </div>
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
