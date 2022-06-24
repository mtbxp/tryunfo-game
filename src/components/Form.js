import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="name-input">
        Inserir o nome da carta
        <input type="text" data-testid="name-input" />
      </label>
      <label htmlFor="description-input">
        Inserir a descrição da carta
        <textarea data-testid="description-input" />
      </label>
      <label htmlFor="attr1-input">
        Inserir o primeiro atributo da carta
        <input type="number" data-testid="attr1-input" />
      </label>
      <label htmlFor="attr2-input">
        Inserir o segundo atributo da carta
        <input type="number" data-testid="attr2-input" />
      </label>
      <label htmlFor="attr3-input">
        Inserir o terceiro atributo da carta
        <input type="number" data-testid="attr3-input" />
      </label>
      <label htmlFor="image-input">
        Inserir o caminho para imagem da carta
        <input type="text" data-testid="image-input" />
      </label>
      <label htmlFor="rare-input">
        Escolher a raridade da carta
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <label htmlFor="trunfo-input">
        A carta é o Super Trunfo?
        <input type="checkbox" data-testid="trunfo-input" />
      </label>
      <button type="button" data-testid="save-button">Salvar</button>
    </form>
  );
}

export default Form;
