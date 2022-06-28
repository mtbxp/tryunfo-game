import PropTypes from 'prop-types';
import React from 'react';

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
      <div className="global-card">
        <h1 className="titulos-compo">Pré-visualização</h1>
        <div className="card">
          <h3 data-testid="name-card">{cardName}</h3>
          <img
            className="imagem"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p className="descricao" data-testid="description-card">{cardDescription}</p>
          <div className="card-baixo">
            <h4 data-testid="attr1-card">
              Attr01....................................
              {cardAttr1}
            </h4>
            <h4 data-testid="attr2-card">
              Attr02....................................
              {cardAttr2}
            </h4>
            <h4 data-testid="attr3-card">
              Attr03....................................
              {cardAttr3}
            </h4>
            <h5 data-testid="rare-card">{cardRare}</h5>
          </div>
          { (cardTrunfo) ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
        </div>
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
