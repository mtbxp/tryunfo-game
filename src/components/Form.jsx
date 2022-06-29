import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          URL da imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
            id="image"
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
