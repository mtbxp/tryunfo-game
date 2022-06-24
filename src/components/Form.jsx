import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <text data-testid="name-input"> </text>
        <textarea data-testid="description-input" />
        <label htmlFor="attr1">
          <input type="number" data-testid="attr1-input" id="attr1"/>
        </label>
        <label htmlFor="attr2">
          <input type="number" data-testid="attr2-input" id="attr2"/>
        </label>
        <label htmlFor="attr3">
          <input type="number" data-testid="attr3-input" id="attr3"/>
        </label>
        <text data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal"> normal </option>
          <option value="raro"> raro </option>
          <option value="muito raro"> muito raro </option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button data-testid="save-button" type="submit"> Salvar </button>
      </>
    );
  }
}

export default Form;
