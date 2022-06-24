import React, { Component } from 'react';
import '../index.css';

class Form extends Component {
  render() {
    return (
      <form className="form">

        <label>
          <input type="text" data-testid="name-input" />
        </label>

        <label>
          <textarea name="Nome" data-testid="description-input" />
        </label>

        <label>
          <input type="number" data-testid="attr1-input" />
        </label>

        <label>
          <input type="number" data-testid="attr2-input" />
        </label>

        <label>
          <input type="number" data-testid="attr3-input" />
        </label>

        <label>
          <input type="text" data-testid="image-input" />
        </label>

        <label>
          <input type="text" data-testid="image-input" />
        </label>

        <label>
          <select type="select" data-testid="rare-input">
            Raridade
            <options type="select">normal</options>
            <options type="select">raro</options>
            <options type="select">muito raro</options>
          </select>
        </label>

        <label>
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <label>
          <button type="submit" data-testid="save-button"> Salvar </button>
        </label>
      </form>
    );
  }
}

export default Form;
