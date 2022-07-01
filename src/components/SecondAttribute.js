import React, { Component } from 'react';

class SecondAttribute extends Component {
  render() {
    return (
      <label htmlFor="attribute2">
        Atributo 2
        <input
          data-testid="attr2-input"
          type="number"
          name="attribute2"
          id="attribute2"
        />
      </label>
    );
  }
}

export default SecondAttribute;
