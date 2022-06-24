import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr1:
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Attr2:
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Attr3:
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem:
          <input
            id="image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <select
          name="raridade"
          data-testid="rare-input"
        >
          Raridade:
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            id="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
