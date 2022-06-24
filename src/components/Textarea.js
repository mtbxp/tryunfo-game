import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, text } = this.props;
    return (
      <textarea
        name={ name }
        id={ name }
        cols="30"
        rows="10"
      >
        {text}
      </textarea>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Textarea;
