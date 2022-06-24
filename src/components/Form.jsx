import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <br />
          <input type="text" name="name" data-testid="name-input" />
          <br />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <br />
          <textarea name="description" data-testid="description-input" />
          <br />
        </label>
        <br />
        <label htmlFor="attr1">
          attr1
          <input type="number" name="attr1" data-testid="attr1-input" />
          <br />
        </label>
        <br />
        <label htmlFor="attr2">
          attr2
          <input type="number" name="attr2" data-testid="attr2-input" />
          <br />
        </label>
        <br />
        <label htmlFor="attr3">
          attr3
          <input type="number" name="attr3" data-testid="attr3-input" />
          <br />
        </label>
        <br />
        <label htmlFor="image">
          Imagem:
          <br />
          <input type="text" name="image" data-testid="image-input" />
          <br />
        </label>
        <br />
        <label htmlFor="rare">
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          <br />
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
          Super Trybe Trunfo
          <br />
        </label>
        <br />
        <button type="button" name="salvar" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
