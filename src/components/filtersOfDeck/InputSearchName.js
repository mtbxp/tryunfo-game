import React from 'react';
import PropTypes from 'prop-types';

class InputSearchName extends React.Component {
  render() {
    const { valueFilterName, onInputChange, isSearchDisabled } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        value={ valueFilterName }
        onChange={ onInputChange }
        name="filterName"
        disabled={ isSearchDisabled }
      />);
  }
}

InputSearchName.propTypes = {
  valueFilterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSearchDisabled: PropTypes.bool.isRequired,
};

export default InputSearchName;
