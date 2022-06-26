import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const {
      cardImage,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="image-input">
        <input
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
