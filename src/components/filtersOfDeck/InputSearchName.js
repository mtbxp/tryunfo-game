import React from 'react';
import PropTypes from 'prop-types';

class InputSearchName extends React.Component {
  render() {
    const { valueFilterName, onInputChange } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        value={ valueFilterName }
        onChange={ onInputChange }
        name="filterName"
      />);
  }
}

InputSearchName.propTypes = {
  valueFilterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputSearchName;
