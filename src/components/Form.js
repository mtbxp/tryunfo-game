import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="nameCard">
          <input
            data-testid="name-input"
            type="text"
            id="nameCard"
            placeholder="Nome:"
            required
          />
        </label>

        <label htmlFor="descriptionCard">
          <textarea
            data-testid="description-input"
            type=""
            id="descriptionCard"
            placeholder="Descreva a carta"
            cols="30"
            rows="10"
            maxLength="500"
            required
          />
        </label>

        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            placeholder="1º atributo"
            required
          />
        </label>

        <label htmlFor="attr2">
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            placeholder="2º atributo"
            required
          />
        </label>

        <label htmlFor="attr3">
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            placeholder="3º atributo"
            required
          />
        </label>

        <label htmlFor="imgCard">
          <input
            data-testid="image-input"
            type="text"
            id="imgCard"
            placeholder="insira o url da carta"
            required
          />
        </label>

        <label htmlFor="rare">
          <select
            type="select"
            data-testid="rare-input"
            id="rare"
            required
          >
            <option
              value="normal"
              id="nomal"
            >
              normal
            </option>
            <option
              value="raro"
              id="raro"
            >
              raro
            </option>
            <option
              value="muito raro"
              id="muitoRaro"
            >
              muito raro
            </option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            placeholder="Nome da carta"
            required
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
