import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form action="submit">
          <h2>Adicionar Sua Carta</h2>
          Nome:
          <label htmlFor="name-input">
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="name-input"
            />
          </label>
          Descrição da Carta:
          <label htmlFor="description-input">
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description-input"
            />
          </label>
          1° Atributo:
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="attr1-input"
            />
          </label>
          2° Atributo:
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="attr2-input"
            />
          </label>
          3° Atributo:
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="attr3-input"
            />
          </label>
          URL da Imagem da Carta:
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="image-input"
            />
          </label>
          Escolha a Raridade da Carta:
          <label htmlFor="rare-input">
            <select data-testid="rare-input" id="rare-input">
              <option value="normal"> NORMAL </option>
              <option value="raro"> RARO </option>
              <option value="muito raro"> MUITO RARO </option>
            </select>
          </label>
          Super Trunfo:
          <label htmlFor="trunfo-input">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo-input"
            />
          </label>
          <button data-testid="save-button" type="submit">
            Salvar
          </button>
        </form>
      </div>

    );
  }
}

export default Form;
