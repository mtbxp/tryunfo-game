import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const { onInputChange, searchName, type, filterForType } = this.props;
    return (
      <div>
        <label htmlFor="search">
          Filtro de Busca
          <input
            type="text"
            name="searchName"
            data-testid="name-filter"
            onChange={ onInputChange }
            value={ searchName }
          />
        </label>
        <label htmlFor="rare">
          Filtrar por Raridade:
          <select
            data-testid="rare-filter"
            id="type"
            name="type"
            value={ type }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
            <option value="todas">Todas</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // filterForType: PropTypes.func.isRequired,
};

export default Filter;
