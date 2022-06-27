import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  onInputChange = ({ target }) => {
    const { cardName } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [cardName]: value,
    });
  };

  render() {
    const { nameFilter, rareFilter, trunfoFilter } = this.state;
    const { preview, deleteButtonClick, saveCards } = this.props;
    const myCards = saveCards
      .filter((card) => (!trunfoFilter ? true
        : card.cardTrunfo))
      .filter((card) => (nameFilter === '' ? true
        : card.cardName.includes(nameFilter)))
      .filter((card) => (rareFilter === 'todas' ? true
        : card.cardRare === rareFilter));
    return (
      <div>
        <section>
          <label htmlFor="nameFilter">
            <span>Filtro por nome: </span>
            <input
              type="text"
              data-testid="name-filter"
              value={ nameFilter }
              name="nameFilter"
              id="nameFilter"
              onChange={ this.onInputChange }
              disabled={ trunfoFilter }
            />
          </label>
          <label htmlFor="rareFilter">
            <span>Filtro por raridade: </span>
            <select
              type="text"
              data-testid="rare-filter"
              value={ rareFilter }
              name="rareFilter"
              id="rareFilter"
              onChange={ this.onInputChange }
              disabled={ trunfoFilter }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label
            htmlFor="trunfoFilter"
            data-testid="trunfo-filter"
          >
            <input
              type="checkbox"
              name="trunfoFilter"
              id="trunfoFilter"
              checked={ trunfoFilter }
              onChange={ this.onInputChange }
            />
            <span>Filtro por Trunfo: </span>
          </label>
        </section>
        <section>
          {myCards.map((card) => (
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
              deleteButtonClick={ deleteButtonClick }
              preview={ preview }
            />
          ))}
        </section>
      </div>
    );
  }
}

CardList.propTypes = {
  saveCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.string,
    }),
  ).isRequired,
  deleteButtonClick: PropTypes.func,
  preview: PropTypes.bool,
}.isRequired;
