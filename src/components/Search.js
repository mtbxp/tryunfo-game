import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { textFilter, onInputChange, rarityFilter, trunfoFilter,
      disabled } = this.props;
    return (
      <section>
        <label htmlFor="pesquisa">
          Search card by name:
          <input
            type="text"
            data-testid="name-filter"
            value={ textFilter }
            onChange={ onInputChange }
            disabled={ disabled }
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
            disabled={ disabled }
            name="rarityFilter"
            id="rairtyFilter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label data-testid="trunfo-filter" htmlFor="trunfoFilter">
          Super Trunfo
          <input
            type="checkbox"
            checked={ trunfoFilter }
            onChange={ onInputChange }
            name="trunfoFilter"
            id="trunfoFilter"
          />
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
