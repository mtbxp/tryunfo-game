import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descricao:
          <input
            type="textarea"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr01">
          Atrr01
          <input
            type="number"
            name="attr01"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr02">
          Atrr02
          <input
            type="number"
            name="attr02"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr03">
          Attr03
          <input
            type="number"
            name="atrr03"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="rare"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="superTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>

    );
  }
}

export default Form;
