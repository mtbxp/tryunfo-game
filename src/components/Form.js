import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nomeCarta">
          Nome da carta:
          <input
            data-testid="name-input"
            type="text"
            id="nomeCarta"
          />
        </label>
        <label htmlFor="descricaoCarta">
          Descrição da carta:
          <input
            data-testid="description-input"
            type="textarea"
            id="descricaoCarta"
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            id="atributo1"
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            id="atributo2"
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            id="atributo3"
          />
        </label>
        <label htmlFor="imagemCarta">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            id="imagemCarta"
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade">
            <option value="normal" selected>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
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
