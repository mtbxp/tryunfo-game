import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, text, dataTestId } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input type={ type } name={ name } data-testid={ dataTestId } />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;
