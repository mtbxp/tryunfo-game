import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';

class FilterForm extends React.Component {
  render() {
    const { filterCard, isFilterAbled, selectedFilter } = this.props;
    return (
      <form className="filter-card">
        <label htmlFor="filter-name">
          Filter research by name:
          <input
            id="filter-name"
            name="cardName"
            data-testid="name-filter"
            type="text"
            placeholder="Type the name of the card"
            onChange={ filterCard }
            disabled={ isFilterAbled }
          />
        </label>
        <br />
        <label htmlFor="filter-rarity">
          Filter research by rarity:
          <select
            data-testid="rare-filter"
            name="cardRare"
            id="filter-rarity"
            type="select"
            onChange={ filterCard }
            value="todas"
            disabled={ isFilterAbled }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="filter-joker">
          Filter research by joker:
          <input
            data-testid="trunfo-filter"
            id="filter-joker"
            name="cardTrunfo"
            type="checkbox"
            onSelect={ selectedFilter }
          />
        </label>
      </form>
    );
  }
}

FilterForm.propTypes = {
  filterCard: PropTypes.func.isRequired,
  isFilterAbled: PropTypes.bool.isRequired,
  selectedFilter: PropTypes.func.isRequired,
};

export default FilterForm;
