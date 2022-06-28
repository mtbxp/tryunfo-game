import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      onInputChange,
      searchName,
      searchRare,
      searchTrunfo,
    } = this.props;

    return (
      <section className="searchSection">
        <label htmlFor="searchName">
          <input
            data-testid="name-filter"
            type="text"
            name="searchName"
            disabled={ searchTrunfo }
            onChange={ onInputChange }
            value={ searchName }
          />
        </label>
        <select
          data-testid="rare-filter"
          name="searchRare"
          value={ searchRare }
          disabled={ searchTrunfo }
          onChange={ onInputChange }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="searchTrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="searchTrunfo"
            onChange={ onInputChange }
            checked={ searchTrunfo }
          />
        </label>
      </section>
    );
  }
}

Search.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  searchRare: PropTypes.string.isRequired,
  searchTrunfo: PropTypes.bool.isRequired,
};

export default Search;
