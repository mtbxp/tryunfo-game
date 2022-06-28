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
  name: PropTypes.string,
  text: PropTypes.string,
  // type: PropTypes.string,
  dataTestId: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
}.isRequired;

// Input.defaultProps = {
//   checked: false,
// };

export default Input;
