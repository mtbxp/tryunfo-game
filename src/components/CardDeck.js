import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardDeck extends React.Component {
  render() {
    const { cards, button } = this.props;
    return (
      <div>
        {cards.map((item) => (<Card
          name={ cards.cardName }
          key={ cards.cardName }
          cardName={ item.cardName }
          cardImage={ item.cardImage }
          cardDescription={ item.cardDescription }
          cardAttr1={ item.cardAttr1 }
          cardAttr2={ item.cardAttr2 }
          cardAttr3={ item.cardAttr3 }
          cardRare={ item.cardRare }
          cardTrunfo={ item.cardTrunfo }
          deleteCard
          deletarCarta={ button }
        />))}
      </div>
    );
  }
}

CardDeck.propTypes = {
  cards: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
};
export default CardDeck;
