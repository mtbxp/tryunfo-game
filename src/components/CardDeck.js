import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardDeck extends React.Component {
  render() {
    const { cards } = this.props;
    console.log(cards);
    return (
      <div>
        {cards.map((item) => (<Card
          key={ cards.cardName }
          cardName={ item.cardName }
          cardImage={ item.cardImage }
          cardDescription={ item.cardDescription }
          cardAttr1={ item.cardAttr1 }
          cardAttr2={ item.cardAttr2 }
          cardAttr3={ item.cardAttr3 }
          cardRare={ item.cardRare }
          cardTrunfo={ item.cardTrunfo }
        />))}
      </div>
    );
  }
}

CardDeck.propTypes = {
  cards: PropTypes.string.isRequired,
};
export default CardDeck;
