import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardDeck } = this.props;
    return (
      <div className="card-list">
        {
          cardDeck.map((cardUnity, key) => (<Card
            cardName={ cardUnity.cardName }
            cardDescription={ cardUnity.cardDescription }
            cardAttr1={ cardUnity.cardAttr1 }
            cardAttr2={ cardUnity.cardAttr2 }
            cardAttr3={ cardUnity.cardAttr3 }
            cardImage={ cardUnity.cardImage }
            cardRare={ cardUnity.cardRare }
            cardTrunfo={ cardUnity.cardTrunfo }
            key={ key }
          />))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardDeck: PropTypes.string,
};

export default CardList;
