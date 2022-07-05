import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilters extends Component {
  render() {
    const { search, onSearchInputChange } = this.props;
    return (
      <form className="search-form">
        <h3>Filtros de busca</h3>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          name="search"
          value={ search }
          onChange={ onSearchInputChange }
        />
      </form>
    );
  }
}

SearchFilters.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
};

export default SearchFilters;
