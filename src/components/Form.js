import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            type="text-area"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
          />
        </label>
        <label htmlFor="thumbnail">
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="Raridade">
          Raridade:
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito-raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            name="trunfo"
            id="trunfo"
            type="checkbox"
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
