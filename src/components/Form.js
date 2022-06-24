import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="card-name">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="card-name"
          />
        </label>
        <label htmlFor="card-description">
          Descrição da carta
          <input
            data-testid="description-input"
            type="textarea"
            name="card-description"
          />
        </label>
        <label htmlFor="first-attribute">
          Primeiro atributo
          <input
            data-testid="attr1-input"
            type="number"
            name="first-attribute"
          />
        </label>
        <label htmlFor="second-attribute">
          Segundo atributo
          <input
            data-testid="attr2-input"
            type="number"
            name="second-attribute"
          />
        </label>
        <label htmlFor="second-attribute">
          Terceiro atributo
          <input
            data-testid="attr3-input"
            type="number"
            name="third-attribute"
          />
        </label>
        <label htmlFor="card-image">
          Imagem da carta
          <input
            data-testid="image-input"
            type="text"
            name="card-image"
          />
        </label>
        <label htmlFor="card-rare">
          Nível de raridade
          <select data-testid="rare-input" name="card-rare">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="form-checkbox">
          A carta é um Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="form-checkbox"
          />
        </label>
        <button data-testid="save-button" type="submit">
          Adicionar carta
        </button>
      </form>
    );
  }
}

export default Form;
