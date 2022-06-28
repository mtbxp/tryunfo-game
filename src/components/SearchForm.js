import React from 'react';
import ProoTypes from 'prop-types';
import '../styles/searchForm.css';

class SearchForm extends React.Component {
  render() {
    const { nameSearch, onSearchChange, rareSearch, trunfoSearch } = this.props;
    return (
      <form className="search-form">
        <fieldset>
          <legend>Filtros de busca</legend>
          <input
            type="text"
            data-testid="name-filter"
            name="nameSearch"
            placeholder="Nome da carta"
            disabled={ trunfoSearch }
            value={ nameSearch }
            onChange={ onSearchChange }
          />
          <select
            data-testid="rare-filter"
            name="rareSearch"
            disabled={ trunfoSearch }
            value={ rareSearch }
            onChange={ onSearchChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label htmlFor="trunfoSearch" className="line-checkbox">
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoSearch"
              id="trunfoSearch"
              checked={ trunfoSearch }
              onChange={ onSearchChange }
            />
            <div className="checkbox-label">Super Trunfo</div>
          </label>
        </fieldset>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchChange: ProoTypes.func.isRequired,
  nameSearch: ProoTypes.string.isRequired,
  rareSearch: ProoTypes.string.isRequired,
  trunfoSearch: ProoTypes.bool.isRequired,
};

export default SearchForm;
