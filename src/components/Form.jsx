import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>Adicionar Nova Carta</h3>
        Nome:
        <label htmlFor="name-input">
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name-input"
          />
        </label>
        Descrição:
        <label htmlFor="description-input">
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="description-input"
          />
        </label>
        Atributo 1:
        <label htmlFor="attr1-input">
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1-input"
          />
        </label>
        Atributo 2:
        <label htmlFor="attr2-input">
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2-input"
          />
        </label>
        Atributo 3:
        <label htmlFor="attr3-input">
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr2-input"
          />
        </label>
        Imagem:
        <label htmlFor="image-input">
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image-input"
          />
        </label>
        Raridade:
        <label htmlFor="rare-imput">
          <select data-testid="rare-input" id="rare-imput">
            <option value="normal"> Normal</option>
            <option value="raro"> Raro</option>
            <option value="muito raro"> Muito Raro</option>
          </select>
        </label>
        Super Trybe Trunfo
        <label htmlFor="trunfo-input">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
