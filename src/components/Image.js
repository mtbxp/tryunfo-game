import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <label htmlFor="image">
        Imagem Url:
        <input
          data-testid="image-input"
          type="text"
          name="image"
          id="image"
        />
      </label>
    );
  }
}

export default Image;
