import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const {
      data,
      removeCard,
      inputSearch,
      selectSearch,
    } = this.props;
    return (
      <div>
        {data.length === 0 ? <p>deck vazio</p>
          : data
            .filter((card) => card.cardRare.toLowerCase().includes(selectSearch))
            .filter((card) => card.cardName.toLowerCase().includes(inputSearch))
            .map((card, i) => (<Card
              key={ i }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              preview={ false }
              removeCard={ removeCard }
            />))}
      </div>
    );
  }
}

Deck.propType = {
  data: PropTypes.array.isRequired,
  removeCard: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  selectSearch: PropTypes.string.isRequired,
};

export default Deck;
