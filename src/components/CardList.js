import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { allCards } = this.props;
    return (
      <div>
        {
          // lógica funcionou, porém deixou de passar no teste do requisito 4
          allCards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  allCards: PropTypes.string.isRequired,
};

export default CardList;
