import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <label htmlFor="name">
        Nome
        <input
          data-testid="name-input"
          type="text"
          name="name"
          id="name"
        />
      </label>
    );
  }
}

export default Name;
