import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="players-name">
            Nome:

            <input
              type="text"
              data-testid="name-input"
              id="players-name"
              name="players-name"
              required
            />
          </label>

          <label htmlFor="playing-card-description">
            Descrição

            <input
              type="text-area"
              data-testid="description-input"
              id="playing-card-description"
              name="playing-card-description"
            />
          </label>

          <label htmlFor="first-attribute">
            Attr01

            <input
              type="number"
              data-testid="attr1-input"
              id="first-attribute"
              name="first-attribute"
            />
          </label>

          <label htmlFor="second-attribute">
            Attr02

            <input
              type="number"
              data-testid="attr2-input"
              id="second-attribute"
              name="second-attribute"
            />
          </label>

          <label htmlFor="third-attribute">
            Attr03

            <input
              type="number"
              data-testid="attr3-input"
              id="third-attribute"
              name="third-attribute"
            />
          </label>

          <label htmlFor="playing-card-picture">
            Imagem

            <input
              type="text"
              data-testid="image-input"
              id="playing-card-picture"
              name="playing-card-picture"
            />
          </label>

          <label htmlFor="rare-card">
            Raridade

            <select
              data-testid="rare-input"
              id="rare-card"
              name="rare-card"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>

          </label>

          <label htmlFor="trunfo-card">
            Super Trybe Trunfo

            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-card"
              name="trunfo-card"
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            id="button"
            name="button"
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}

export default Form;
