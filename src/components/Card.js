import React from 'react';
import '../styles/card.css';
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
      list } = this.props;

    return (
      <div>
        <div className="card" key={ cardName }>
          {
            cardTrunfo
              ? <div data-testid={ !list ? 'trunfo-card' : undefined } className="trunfo">
                Super Trunfo
              </div>
              : undefined
          }
          <h2 data-testid={ !list ? 'name-card' : undefined }>{ cardName }</h2>

          <div className="card-info">
            <div className="card-attr-container">

              <h4 className="card-attr-title">Cool</h4>
              <h1 data-testid={ !list ? 'attr1-card' : undefined } className="card-attr">
                { cardAttr1 }
              </h1>

              <h4 className="card-attr-title">Fannie</h4>
              <h1 data-testid={ !list ? 'attr2-card' : undefined } className="card-attr">
                { cardAttr2 }
              </h1>

              <h4 className="card-attr-title">Smart</h4>
              <h1 data-testid={ !list ? 'attr3-card' : undefined } className="card-attr">
                { cardAttr3 }
              </h1>

              <h4 className="card-attr-title">Popularidade</h4>
              <h2 data-testid={ !list ? 'rare-card' : undefined } className="card-attr">
                { cardRare }
              </h2>
            </div>
            <div className="card-image-container">
              {
                cardImage
                  ? <img
                      data-testid={ !list ? 'image-card' : undefined }
                      src={ cardImage }
                      alt={ cardName }
                      className="card-image"
                  />
                  : <img
                      src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
                      alt="silhueta Homer"
                      className="card-image silhueta"
                  />
              }
            </div>
          </div>
          <h4
            data-testid={ !list ? 'description-card' : undefined }
            className="description card-attr"
          >
            { `"${cardDescription}"` }
          </h4>
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
  list: PropTypes.bool.isRequired,
};

export default Card;
