import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute1">
          Atributo 1
          <input
            type="number"
            name="attribute1"
            id="attribute1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2
          <input
            type="number"
            name="attribute2"
            id="attribute2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3
          <input
            type="number"
            name="attribute3"
            id="attribute3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="check-trunfo">
          Trunfo
          <input
            type="checkbox"
            name="check-trunfo"
            id="check-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          name="button"
          id="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
