import React from 'react';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input name="name-input" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          Descrição da Carta:
          <textarea data-testid="description-input" name="description-input" />
        </label>
        <label htmlFor="name-input">
          Atributo 1:
          <input name="attr1-input" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="name-input">
          Atributo 2:
          <input name="attr2-input" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="name-input">
          Atributo 3:
          <input name="attr3-input" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="name-input">
          URL Imagem:
          <input name="name-input" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input" name="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo?
          <input name="trunfo-input" data-testid="trunfo-input" type="checkbox" />
        </label>
        <button data-testid="save-button" type="button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
