import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nameCard">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="nameCard"
            id="nameCard"
          />
        </label>

        <label htmlFor="descriptionCard">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="descriptionCard"
            id="descriptionCard"
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
          Attr01
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Attr01
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
          />
        </label>

        <label htmlFor="imageCard">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imageCard"
            id="imageCard"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            name="rarity"
            id="rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
