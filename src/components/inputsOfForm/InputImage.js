import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { cardImage, onChange } = this.props;
    return (<input
      type="text"
      name="cardImage"
      value={ cardImage }
      onChange={ onChange }
      data-testid="image-input"
    />);
  }
}

InputImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
