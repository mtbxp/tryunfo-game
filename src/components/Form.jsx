import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <h1>Adicionar nova carta:</h1>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input type="number" name="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input type="number" name="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input type="number" name="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input type="text" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select name="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
