import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Filters extends React.Component {
  render() {
    const { nameFilter, onInputChange, rareFilter } = this.props;
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
          />
        </label>
        <label htmlFor="rareFilter">
          Popularidade
          <br />
          <select
            name="rareFilter"
            className="input"
            value={ rareFilter }
            data-testid="rare-filter"
            onChange={ onInputChange }
          >
            <option value="">todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filters;
