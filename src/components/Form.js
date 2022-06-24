import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name-input"
          />
          <br />
        </label>
        Descrição
        <label htmlFor="description">
          <textarea
            data-testid="description-input"
            id="input-description"
          />
        </label>
        <br />
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
          />
        </label>
        <p>Pontos restantes = 000</p>
        <br />
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
          />
        </label>
        <br />
        <label htmlFor="rare-input">
          Raridade
          <select
            name=""
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          Super Trybe Tunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          id="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
