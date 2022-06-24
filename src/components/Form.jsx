import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">

        <label htmlFor="name-input">
          Nome:
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea data-testid="description-input" cols="30" rows="10"> </textarea>
        </label>

        <label htmlFor="attr1-input">
          Business:
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Antiguididade:
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          Distribuição:
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Pessoa famosa falante desta língua:
          <input type="text" data-testid="image-input" />
        </label>

        <label htmlFor="rare-input">
          <select name="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Carta Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">
          Salvar trunfo
        </button>
      </form>
    );
  }
}

export default Form;
