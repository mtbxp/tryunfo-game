import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { textFilter, onInputChange, rarityFilter } = this.props;
    return (
      <section>
        <label htmlFor="pesquisa">
          Search card by name:
          <input
            type="text"
            data-testid="name-filter"
            value={ textFilter }
            onChange={ onInputChange }
            name="textFilter"
            id="pesquisa"
            placeholder="card name"
          />
        </label>
        <label htmlFor="rarityFilter">
          Search card by rarity:
          <select
            data-testid="rare-filter"
            value={ rarityFilter }
            onChange={ onInputChange }
            name="rarityFilter"
            id="rairtyFilter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      </section>
    );
  }
}

Search.propTypes = {
  textFilter: PropTypes.string,
  handleSearch: PropTypes.func,
}.isRequired;

export default Search;
