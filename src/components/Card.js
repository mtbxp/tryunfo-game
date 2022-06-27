import React from 'react';
import ProoTypes from 'prop-types';
import '../styles/card.css';

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
      <div className="exter-border">
        <div className="inter-border">
          <div className="card-content">
            <h4 data-testid="name-card">{ cardName }</h4>
            <div className="card-image">
              <p data-testid="rare-card" className="rare">{ cardRare }</p>
              <img
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
                className="picture"
              />
              {
                cardTrunfo
                  && <p data-testid="trunfo-card" className="tryunfo">Super Trunfo</p>
              }
            </div>
            <p
              className="description"
              data-testid="description-card"
            >
              { cardDescription }
            </p>
            <div className="attrs">
              <p className="attr-name">🏆 Vitórias</p>
              <p className="attr-number" data-testid="attr1-card">{ cardAttr1 }</p>
              <p className="attr-name">🥇 Pole Positions</p>
              <p className="attr-number" data-testid="attr2-card">{ cardAttr2 }</p>
              <p className="attr-name">🏁 Melhores voltas</p>
              <p className="attr-number" data-testid="attr3-card">{ cardAttr3 }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: ProoTypes.string.isRequired,
  cardDescription: ProoTypes.string.isRequired,
  cardAttr1: ProoTypes.string.isRequired,
  cardAttr2: ProoTypes.string.isRequired,
  cardAttr3: ProoTypes.string.isRequired,
  cardImage: ProoTypes.string.isRequired,
  cardRare: ProoTypes.string.isRequired,
  cardTrunfo: ProoTypes.bool.isRequired,
};

export default Card;
