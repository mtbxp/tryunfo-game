import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="filter">
        Filtro
        <input
          type="text"
          data-testid="name-filter"
          name="Filter"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
export default Filter;
