import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const { onInputChange, searchValue } = this.props;
    return (
      <div>
        <label htmlFor="search">
          Filtro de Busca
          <input
            type="text"
            name="searchValue"
            data-testid="name-filter"
            onChange={ onInputChange }
            value={ searchValue }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Filter;
