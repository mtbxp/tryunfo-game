import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="text">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="text"
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <textarea
            data-testid="description-input"
            name="descricao"
            id="descricao"
          />
        </label>

        <fieldset id="attributes">
          <label htmlFor="attr1">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="attr1"
            />
          </label>

          <label htmlFor="attr2">
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="attr2"
            />
          </label>

          <label htmlFor="attr3">
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="attr3"
            />
          </label>
        </fieldset>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select data-testid="rare-input" id="rarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superTrunfo"
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
