import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListOfCards extends React.Component {
  render() {
    const { listOfCards, removeButton } = this.props;
    return (
      <div>
        {listOfCards.map((card, index) => (
          <div key={ index }>
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              data-testid="delete-button"
              className="remove-button"
              type="button"
              value={ card.cardName }
              onClick={ removeButton }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ListOfCards.propTypes = {
  listOfCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeButton: PropTypes.func.isRequired,
};

export default ListOfCards;
