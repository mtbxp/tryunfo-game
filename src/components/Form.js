import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome Da Carta:
          <input data-testid="name-input" name="name" type="text" />
        </label>

        <label htmlFor="description">
          Descrição Da Carta:
          <textarea data-testid="description-input" name="description" />
        </label>

        <label htmlFor="attr1">
          Atributo 1:
          <input data-testid="attr1-input" name="attr1" type="number" />
        </label>

        <label htmlFor="attr2">
          Atributo 2:
          <input data-testid="attr2-input" name="attr2" type="number" />
        </label>

        <label htmlFor="attr3">
          Atributo 3:
          <input data-testid="attr3-input" name="attr3" type="number" />
        </label>

        <label htmlFor="image">
          URL Da Imagem:
          <input data-testid="image-input" name="image" type="text" />
        </label>

        <label htmlFor="rare">
          <select data-testid="rare-input" name="rare">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super">
          Super Trunfo:
          <input data-testid="trunfo-input" name="super" type="checkbox" />
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;
