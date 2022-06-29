import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, onDeleteCardButton } = this.props;

    return (
      <form className="CardDeck" onSubmit={ onDeleteCardButton }>
        <h1>{ cardName }</h1>
        <p>{ cardRare }</p>
        <div className="imgCardDeck">
          <img src={ cardImage } alt={ cardName } />
        </div>
        <p>{ cardDescription }</p>
        <p>{ cardAttr1 }</p>
        <p>{ cardAttr2 }</p>
        <p>{ cardAttr3 }</p>
        {
          cardTrunfo && <h2>Super Trunfo</h2>
        }
        <button
          type="submit"
          data-testid="delete-button"
        >
          Excluir
        </button>
      </form>
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
  onDeleteCardButton: PropTypes.func.isRequired,
};

export default Card;
