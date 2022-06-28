import React from 'react';
import PropTypes from 'prop-types';

class InputFilterSuperTrunfo extends React.Component {
  render() {
    const { valueFilterSuperTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-filter">
        SuperTrunfo
        <input
          type="checkbox"
          data-testid="trunfo-filter"
          id="trunfo-filter"
          checked={ valueFilterSuperTrunfo }
          onChange={ onInputChange }
          name="filterSuperTrunfo"
        />
      </label>);
  }
}

InputFilterSuperTrunfo.propTypes = {
  valueFilterSuperTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputFilterSuperTrunfo;
