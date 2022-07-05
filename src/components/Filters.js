import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Filters extends React.Component {
  render() {
    const { nameFilter, onInputChange, rareFilter, trunfoFilter } = this.props;
    return (
      <div className="filters">
        <label htmlFor="name-filter">
          Nome da carta
          <br />
          <input
            value={ nameFilter }
            data-testid="name-filter"
            type="text"
            className="input"
            name="nameFilter"
            onChange={ onInputChange }
            disabled={ trunfoFilter }
          />
        </label>

        <label htmlFor="rareFilter">
          Popularidade
          <br />
          <select
            name="rareFilter"
            id="rareFilter"
            className="input"
            value={ rareFilter }
            data-testid="rare-filter"
            onChange={ onInputChange }
            disabled={ trunfoFilter }
          >
            <option value="">todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoFilter" className="label">
          <input
            name="trunfoFilter"
            id="trunfoFilter"
            type="checkbox"
            checked={ trunfoFilter }
            data-testid="trunfo-filter"
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default Filters;
