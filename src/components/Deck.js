import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFilter: '',
    };
  }

  handleFilters = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { savedCards, handleDeckButton } = this.props;
    const { nameFilter } = this.state;

    return (
      <div>
        <div className="filter">
          <label htmlFor="nameFilter">
            Filtre pelo nome
            <input
              type="text"
              onChange={ this.handleFilters }
              name="nameFilter"
              value={ nameFilter }
              data-testid="name-filter"
            />
          </label>
        </div>
        {
          savedCards
            .filter(({ cardName }) => (
              cardName.toLowerCase().includes(nameFilter.toLowerCase())
            ))
            .map((card) => (
              <div className="deck-card" key={ card.cardName }>
                <Card
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
                  type="button"
                  onClick={ () => handleDeckButton(card.cardName, card.cardTrunfo) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </div>
    );
  }
}

Deck.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeckButton: PropTypes.func.isRequired,
};

export default Deck;
