import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, testid, describeLabel, value, change, checked } = this.props;

    return (
      <label htmlFor={ name }>
        { describeLabel }
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          value={ value }
          checked={ checked }
          onChange={ change }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  describeLabel: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Input;
