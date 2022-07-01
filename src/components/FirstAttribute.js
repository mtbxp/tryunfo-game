import React, { Component } from 'react';

class FirstAttribute extends Component {
  render() {
    return (
      <label htmlFor="attribute1">
        Atributo 1
        <input
          data-testid="attr1-input"
          type="number"
          name="attribute1"
          id="attribute1"
        />
      </label>
    );
  }
}

export default FirstAttribute;
