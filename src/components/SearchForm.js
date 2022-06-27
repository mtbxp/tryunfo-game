import React from 'react';
import ProoTypes from 'prop-types';
import '../styles/searchForm.css';

class SearchForm extends React.Component {
  render() {
    const { nameSearch, onSearchChange } = this.props;
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
        </fieldset>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchChange: ProoTypes.func.isRequired,
  nameSearch: ProoTypes.string.isRequired,
};

export default SearchForm;
