import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <label htmlFor="description-input">
        <input
          data-testid="description-input"
          type="textarea"
        />
      </label>
    );
  }
}

export default Description;
