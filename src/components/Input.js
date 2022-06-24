import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      type,
      text,
      dataTestId,
      value,
      onChange,
      checked,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { text }
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  checked: false,
};

export default Input;
