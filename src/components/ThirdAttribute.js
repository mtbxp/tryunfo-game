import React, { Component } from 'react';

class ThirdAttribute extends Component {
  render() {
    return (
      <label htmlFor="attribute3">
        Atributo 3
        <input
          data-testid="attr3-input"
          type="number"
          name="attribute3"
          id="attribute3"
        />
      </label>
    );
  }
}

export default ThirdAttribute;
