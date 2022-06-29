import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filteringByName,
      filteringByRarity,
      filteringByTrunfo,
      filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            onChange={ filteringByName }
            disabled={ filterTrunfo }
          />
        </label>
        <label htmlFor="searchTrunfo">
          <input
            type="checkbox"
            name="searchTrunfo"
            data-testid="trunfo-filter"
            onClick={ filteringByTrunfo }
          />
        </label>
        <label htmlFor="rareFilter">
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ filteringByRarity }
            disabled={ filterTrunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filteringByName: PropTypes.func.isRequired,
  filteringByRarity: PropTypes.func.isRequired,
  filteringByTrunfo: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
