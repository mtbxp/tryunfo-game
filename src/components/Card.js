import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

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

    /* onst validacaoCardTrunfo = () => {
      if (cardTrunfo === true) {
        return <div data-testid="trunfo-card">Super Trunfo</div>;
      }
    }; */

    return (
      <div
        className="container form-group form-control"
      >
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          className="imagemCarta"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div data-testid="description-card">
          { cardDescription }
        </div>
        <div data-testid="attr1-card">
          { cardAttr1 }
        </div>
        <div data-testid="attr2-card">
          { cardAttr2 }
        </div>
        <div data-testid="attr3-card">
          { cardAttr3}
        </div>
        <div data-testid="rare-card">
          { cardRare}
        </div>
        { cardTrunfo === true ? <div data-testid="trunfo-card">Super Trunfo</div> : '' }
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
