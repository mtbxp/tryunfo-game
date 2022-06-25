import React from 'react';

class Trunfo extends React.Component {
  render() {
    return (
      <label htmlFor="trunfo-input">
        <input
          data-testid="trunfo-input"
          type="checkbox"
        />
      </label>
    );
  }
}

export default Trunfo;
