import React from 'react';
import PropTypes from 'prop-types';

class cardImage extends React.Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <input
        id="cardImage"
        name="cardImage"
        data-testid="image-input"
        alt=""
        value={ value }
        onChange={ onInputChange }
      />
    );
  }
}

cardImage.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default cardImage;
