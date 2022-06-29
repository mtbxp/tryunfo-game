import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, label, onChange, testid, checked } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          checked={ checked }
          id={ name }
          name={ name }
          value={ value }
          type={ type }
          onChange={ onChange }
          data-testid={ testid }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  checked: PropTypes.bool,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  checked: null,
};

export default Input;
