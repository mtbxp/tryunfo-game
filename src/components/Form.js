import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label>
          Descrição da Carta
          <textarea data-testid="description-input" />
        </label>
        <label>
          Primeiro Atributo
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          Segundo Atributo
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          Terceiro Atributo
          <input type="number" data-testid="attr3-input" />
        </label>
        <label>
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label>
          Raridade
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label>
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
