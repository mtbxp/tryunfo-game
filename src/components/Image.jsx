import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="img">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          name="name"
          id="img"
          value={ value }
          onChange={ func }
          required
        />
      </label>
    );
  }
}

Image.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
