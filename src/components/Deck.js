import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  handleFilters = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { savedCards, handleDeckButton } = this.props;
    const { nameFilter, rareFilter, trunfoFilter } = this.state;

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
              disabled={ trunfoFilter }
              data-testid="name-filter"
            />
          </label>
          <label htmlFor="rareFilter">
            Filtre pela raridade
            <select
              onChange={ this.handleFilters }
              name="rareFilter"
              value={ rareFilter }
              disabled={ trunfoFilter }
              data-testid="rare-filter"
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoFilter">
            Apenas Super Trunfo
            <input
              type="checkbox"
              onChange={ this.handleFilters }
              name="trunfoFilter"
              value={ trunfoFilter }
              data-testid="trunfo-filter"
            />
          </label>
        </div>
        {
          savedCards
            .filter(({ cardTrunfo }) => (
              !trunfoFilter ? true : cardTrunfo
            ))
            .filter(({ cardName }) => (
              cardName.toLowerCase().includes(nameFilter.toLowerCase())
            ))
            .filter(({ cardRare }) => (
              rareFilter === 'todas' ? true : cardRare === rareFilter))
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
