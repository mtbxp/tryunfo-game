import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilters extends Component {
  render() {
    const { searchName, searchRare, searchTrunfo, onSearchInputChange } = this.props;
    return (
      <form className="search-form">
        <h3>Filtros de busca</h3>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          name="searchName"
          value={ searchName }
          onChange={ onSearchInputChange }
          disabled={ searchTrunfo }
        />

        <select
          data-testid="rare-filter"
          name="searchRare"
          value={ searchRare }
          onChange={ onSearchInputChange }
          disabled={ searchTrunfo }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="searchTrunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="searchTrunfo"
            id="searchTrunfo"
            onChange={ onSearchInputChange }
            checked={ searchTrunfo }
          />
        </label>
      </form>
    );
  }
}

SearchFilters.propTypes = {
  searchName: PropTypes.string.isRequired,
  searchRare: PropTypes.string.isRequired,
  searchTrunfo: PropTypes.bool.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
};

export default SearchFilters;
