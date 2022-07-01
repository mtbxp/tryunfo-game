import React, { Component } from 'react';

class SuperTrump extends Component {
  render() {
    return (
      <label htmlFor="superTrunfo">
        Super Trunfo
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="superTrunfo"
          id="superTrunfo"
        />
      </label>
    );
  }
}

export default SuperTrump;
