import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        {/* Para htmlFor foi consultado a documentação no MDN (https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor) */}

        <label htmlFor="set-card-name">
          Nome
          <input
            type="text"
            name="card-name"
            id="set-card-name"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="set-card-description">
          Descrição
          <input
            type="textarea"
            name="card-description"
            id="set-card-description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="set-attribute01">
          Attr01
          <input
            type="number"
            name="attribute01"
            id="set-attribute01"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="set-attribute02">
          Attr02
          <input
            type="number"
            name="attribute02"
            id="set-attribute02"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="set-attribute03">
          Attr03
          <input
            type="number"
            name="attribute03"
            id="set-attribute03"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="set-image">
          Imagem
          <input
            type="text"
            name="image"
            id="set-image"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="set-rarity">
          Raridade
          <select
            name="rarity"
            id="set-rarity"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="set-trunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfo"
            id="set-trunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button type="submit" data-testid="save-button" disabled>Salvar</button>

      </form>
    );
  }
}

export default Form;
