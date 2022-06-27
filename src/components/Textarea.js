import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, text, data, value, onInputChange } = this.props;
    return (
      <textarea
        name={ name }
        id={ name }
        value={ value }
        onChange={ onInputChange }
        cols="30"
        rows="10"
        data-testid={ data }
      >
        {text}
      </textarea>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Textarea;
