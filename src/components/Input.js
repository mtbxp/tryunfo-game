import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, type, text, data, value, onInputChange, checked } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type={ type }
          id={ id }
          onChange={ onInputChange }
          value={ value }
          checked={ checked }
          className="input"
          data-testid={ data }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  checked: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
