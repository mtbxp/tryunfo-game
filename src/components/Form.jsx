import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="name-input" value="nome">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="nome"
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            name="descricao"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>

        <label htmlFor="attr1-input">
          Attr1
          <input
            type="text"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Attr2
          <input
            type="text"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Attr3
          <input
            type="text"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="image"
            data-testid="image-input"
          />
        </label>

        <select
          name="caracteristicas"
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
          />
        </label>

        <label htmlFor="save-button">
          <input
            type="submit"
            value="Salvar"
            data-testid="save-button"

          />
        </label>
      </form>
    );
  }
}

export default Forms;
