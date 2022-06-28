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
            .filter((card) => card.cardRare.includes(selectSearch))
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

Deck.propTypes = {
  removeCard: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  selectSearch: PropTypes.string.isRequired,
  data: PropTypes.arrayOf([
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ]).isRequired,
};

export default Deck;
