import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      text,
      type,
      dataTestId,
      value,
      checked,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ name }>
        {text}
        <input
          name={ name }
          type={ type }
          data-testid={ dataTestId }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  checked: false,
};

export default Input;
