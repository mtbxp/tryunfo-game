import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListOfCards extends React.Component {
  render() {
    const { listOfCards } = this.props;
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
          </div>
        ))}
      </div>
    );
  }
}

ListOfCards.propTypes = {
  listOfCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfCards;
