import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea id="description" name="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Attr01:
          <input type="number" id="attr1" name="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02:
          <input type="number" id="attr2" name="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03:
          <input type="number" id="attr3" name="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input type="text" id="image" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select id="rare" name="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="STT">
          <input type="checkbox" id="STT" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
