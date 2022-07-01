import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input type="text" data-testid="name-input" name="name" />
          </label>

          <label htmlFor="description">
            Descrição:
            <textarea data-testid="description-input" name="description" />
          </label>

          <label htmlFor="attr1-input">
            Atributo1:
            <input type="number" data-testid="attr1-input" name="attr1-input" />
          </label>

          <label htmlFor="attr2-input">
            Atributo2:
            <input type="number" data-testid="attr2-input" name="attr2-input" />
          </label>

          <label htmlFor="attr3-input">
            Atributo3:
            <input type="number" data-testid="attr3-input" name="attr3-input" />
          </label>

          <label htmlFor="image">
            Imagem:
            <input type="text" data-testid="image-input" name="image" />
          </label>

          <label htmlFor="rarity">
            Raridade:
            <select data-testid="rare-input" name="rarity">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="supertrunfo">
            Super Trunfo:
            <input type="checkbox" data-testid="trunfo-input" name="supertrunfo" />
          </label>

          <button type="button" data-testid="save-button" name="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
