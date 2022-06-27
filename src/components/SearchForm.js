import React from 'react';
import ProoTypes from 'prop-types';
import '../styles/searchForm.css';

class SearchForm extends React.Component {
  render() {
    const { nameSearch, onSearchChange, rareSearch } = this.props;
    return (
      <form className="search-form">
        <fieldset>
          <legend>Filtros de busca</legend>
          <input
            type="text"
            data-testid="name-filter"
            name="nameSearch"
            placeholder="Nome da carta"
            value={ nameSearch }
            onChange={ onSearchChange }
          />
          <select
            data-testid="rare-filter"
            name="rareSearch"
            value={ rareSearch }
            onChange={ onSearchChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </fieldset>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchChange: ProoTypes.func.isRequired,
  nameSearch: ProoTypes.string.isRequired,
  rareSearch: ProoTypes.string.isRequired,
};

export default SearchForm;
