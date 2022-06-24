import React from 'react';

function Form() {
  return (
    <form>
      <label>
        Inserir o nome da carta
        <input type="text" data-testid="name-input" />
      </label>
      <label>
        Inserir a descrição da carta
        <textarea data-testid="description-input" />
      </label>
      <label>
        Inserir o primeiro atributo da carta
        <input type="number" data-testid="attr1-input" />
      </label>
      <label>
        Inserir o segundo atributo da carta
        <input type="number" data-testid="attr2-input" />
      </label>
      <label>
        Inserir o terceiro atributo da carta
        <input type="number" data-testid="attr3-input" />
      </label>
      <label>
        Inserir o caminho para imagem da carta
        <input type="text" data-testid="image-input" />
      </label>
      <label>
        Escolher a raridade da carta
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <label>
        A carta é o Super Trunfo?
        <input type="checkbox" data-testid="trunfo-input" />
      </label>
      <label>
        <button data-testid="save-button">Salvar</button>
      </label>
    </form>
  )
}

export default Form;