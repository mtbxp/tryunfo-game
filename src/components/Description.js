import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          data-testid="description-input"
          type="textarea"
          name="description"
          id="description"
        />
      </label>
    );
  }
}

export default Description;
