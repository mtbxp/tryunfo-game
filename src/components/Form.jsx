import React from 'react';

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
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
            disabled="disabled"
          >
            Raridade
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito</option>
          </select>
        </label>
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo"
          id="trunfo"
        />
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
