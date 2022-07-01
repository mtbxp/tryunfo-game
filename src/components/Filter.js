import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const { onInputChange, searchName, type, trunfoFilter } = this.props;
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
            disabled={ trunfoFilter }
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
            disabled={ trunfoFilter }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
            <option value="todas">Todas</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo:
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            id="trunfoFilter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filter;
