import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {
      nameFilter: '',
      rareFilter: '',
      trunfoFilter: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { nameFilter, rareFilter, trunfoFilter } = this.state;
    const { preview, deleteButtonClick, saveCards } = this.props;
    const myCards = saveCards
      .filter((card) => (nameFilter === '' ? true : card.cardName.includes(nameFilter)))
      .filter((card) => (rareFilter === 'todas' ? true : card.cardRare === rareFilter))
      .filter((card) => (!trunfoFilter ? true : card.cardTrunfo));
    return (
      <div>
        <section>
          <label htmlFor="nameFilter">
            <h3>Filtro por nome: </h3>
            <input
              type="text"
              data-testid="name-filter"
              value={ nameFilter }
              id="nameFilter"
              onChange={ this.onInputChange }
              disabled={ trunfoFilter }
            />
          </label>
        </section>
        <section>
          <label htmlFor="rareFilter">
            <h3>Filtro por raridade: </h3>
            <select
              type="text"
              data-testid="rare-filter"
              value={ rareFilter }
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
        </section>
        <section>
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
            <h3>Filtro por Trunfo: </h3>
          </label>
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
  deleteButtonClick: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
};
