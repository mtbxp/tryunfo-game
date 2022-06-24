import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da Carta:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição da Carta:
          <textarea type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2:
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3:
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Imagem da Carta:
          <input type="text" data-testid="image-input" />
        </label>
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-input">
          Is going:
          <input name="isGoing" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" value="Submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
