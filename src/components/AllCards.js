import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, eraseCard,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ eraseCard(cardName) }
        >
          Excluir
        </button>
      </div>
    );
  }
}

AllCards.propTypes = {
  eraseCard: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default AllCards;
