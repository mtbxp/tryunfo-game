import React from 'react';
import '../style/global.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Name
          <input
            data-testid="name-input"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descricao
          <textarea
            data-testid="description-input"
            type="text-area"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 01
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 02
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 03
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
          Super Trunfo
          <input
            data-testid="trunfo-input"
            name="trunfo"
            id="trunfo"
            type="checkbox"
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </div>

    );
  }
}

export default Form;
