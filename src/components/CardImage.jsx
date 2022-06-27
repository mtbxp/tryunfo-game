import React from 'react';
import PropTypes from 'prop-types';

class CardImage extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <label htmlFor="cardImage">
        Image:
        <input
          id="cardImage"
          name="cardImage"
          data-testid="image-input"
          alt=""
          cardImage={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardImage;
