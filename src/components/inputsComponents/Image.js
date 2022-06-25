import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <label htmlFor="image-input">
        <input
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }
}

export default Image;
