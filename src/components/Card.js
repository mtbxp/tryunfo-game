import React from 'react';
import '../Css/Card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();

    this.isSuperTrunfo = this.isSuperTrunfo.bind(this);
  }

  isSuperTrunfo() {
    const { cardTrunfo } = this.props;
    if (cardTrunfo === true) {
      return (
        <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>
      );
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.props;
    return (
      <section className="section-card">
        <h3 className="title" data-testid="name-card">{ cardName }</h3>
        <img
          className="card-i"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <div className="card-infos">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        <div>{ this.isSuperTrunfo() }</div>
      </section>
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
