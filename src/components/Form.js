import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            data-testid="name-input"
            placeholder="Digite o nome"
            id="name"
          />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            data-testid="description-input"
            placeholder="Digite a Informação"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          <input
            type="number"
            data-testid="attr1-input"
            placeholder="Escolha o atributo 1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            data-testid="attr2-input"
            placeholder="Escolha o atributo 2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            data-testid="attr3-input"
            placeholder="Escolha o atributo 2"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          <input type="text" data-testid="image-input" id="image" />
        </label>
        <label htmlFor="rare">
          <select name="name" id="name" data-testid="rare-input">
            <option value="normal">norma</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" data-testid="trunfo-input" id="checkbox" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
