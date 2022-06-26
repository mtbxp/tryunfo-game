import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome:
          <input type="text" data-testid="name-input" name="name" id="name" />
        </label>
        <label htmlFor="descricao">
          descrição da carta:
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          select
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="check">
          Triufo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
