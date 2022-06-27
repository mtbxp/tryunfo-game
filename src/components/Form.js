import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name-input">
          Nome da carta
          <textarea data-testid="name-input"> </textarea>
        </label>

        <label htmlFor="description-input">
          Descrição da carta
          <textarea data-testid="description-input"> </textarea>
        </label>

        <label htmlFor="attr1-input">
          Inserir primeiro atributo da carta
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Inserir segundo atributo da carta
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          Inserir terceiro atributo da carta
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Inserir url da imagem
          <textarea data-testid="image-input"> </textarea>
        </label>

        <label htmlFor="rare-input">
          Raridade da carta
          <select data-testid="rare-input">
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo?
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button"> Salvar </button>

      </form>
    );
  }
}
export default Form;
