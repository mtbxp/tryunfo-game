import React from 'react';
import PropTypes from 'prop-types';

class NameFilter extends React.Component {
  render() {
    const {
      nameFilter,
      onInputChange,
      nameAndRareDisabled,
    } = this.props;

    return (
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          name="nameFilter"
          value={ nameFilter }
          onChange={ onInputChange }
          disabled={ nameAndRareDisabled }
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  nameAndRareDisabled: PropTypes.func.isRequired,
};

export default NameFilter;
