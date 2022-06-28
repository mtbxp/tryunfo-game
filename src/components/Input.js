import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, label, onChange, testid } = this.props;

    // my comment

    return (
      <label htmlFor={ name }>
        { label }
        <input
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
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
