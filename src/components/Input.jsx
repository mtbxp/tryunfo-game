import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, testid, describeLabel } = this.props;

    return (
      <label htmlFor={ name }>
        { describeLabel }
        <input data-testid={ testid } type={ type } name={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  describeLabel: PropTypes.string.isRequired,
};

export default Input;
