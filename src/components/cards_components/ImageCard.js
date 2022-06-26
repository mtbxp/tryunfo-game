import React from 'react';
import PropTypes from 'prop-types';

class ImageCard extends React.Component {
  render() {
    const {
      cardImage,
      cardName,
    } = this.props;

    return (
      <img
        data-testid="image-card"
        src={ cardImage }
        alt={ cardName }
      />
    );
  }
}

ImageCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default ImageCard;
