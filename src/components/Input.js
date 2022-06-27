import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, text, data, value, onInputChange } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type={ type }
          id={ name }
          onChange={ onInputChange }
          value={ value }
          checked={ value }
          className="input"
          data-testid={ data }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
