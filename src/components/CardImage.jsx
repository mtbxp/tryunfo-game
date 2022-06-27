import React from 'react';
import PropTypes from 'prop-types';

class cardImage extends React.Component {
  render() {
    const { value, handlerCardInfo } = this.props;

    return (
      <input
        id="cardImage"
        name="cardImage"
        data-testid="image-input"
        alt=""
        value={ value }
        onChange={ handlerCardInfo }
      />
    );
  }
}

cardImage.propTypes = {
  value: PropTypes.string.isRequired,
  handlerCardInfo: PropTypes.func.isRequired,
};

export default cardImage;
