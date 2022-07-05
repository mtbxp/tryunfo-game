import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilters extends Component {
  render() {
    const { searchName, searchRare, onSearchInputChange } = this.props;
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
        />

        <select
          data-testid="rare-filter"
          name="searchRare"
          value={ searchRare }
          onChange={ onSearchInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </form>
    );
  }
}

SearchFilters.propTypes = {
  searchName: PropTypes.string.isRequired,
  searchRare: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
};

export default SearchFilters;
