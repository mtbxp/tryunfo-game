import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Filters extends React.Component {
  render() {
    const { nameFilter, onInputChange } = this.props;
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
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filters;
