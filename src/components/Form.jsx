import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="NomeCarta">
          Nome da Carta:
          <input
            name="NomeCarta"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="Descrição-da-carta">
          Descrição da Carta :
          <textarea
            name="Descrição-da-carta"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1 :
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2 :
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3 :
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
          />
        </label>
        <label htmlFor="Caminho-da-img">
          Imagem :
          <input
            data-testid="image-input"
            name="Caminho-da-img"
            type="text"
          />
        </label>
        <select data-testid="rare-input" name="" id="raridade-carta">
          Raridade da carta
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="Super-trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="Super-trunfo"
          />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
