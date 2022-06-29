import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="temp-id">
            Nome:
            <input data-testid="name-input" type="text" />
          </label>

          <label htmlFor="temp-id">
            Descrição:
            <input data-testid="description-input" type="textarea" />
          </label>

          <label htmlFor="temp-id">
            Atributo 1:
            <input data-testid="attr1-input" type="number" />
          </label>

          <label htmlFor="temp-id">
            Atributo 2:
            <input data-testid="attr2-input" type="number" />
          </label>

          <label htmlFor="temp-id">
            Atributo 3:
            <input data-testid="attr3-input" type="number" />
          </label>

          <label htmlFor="temp-id">
            Imagem:
            <input data-testid="image-input" type="text" />
          </label>

          <label htmlFor="temp-id">
            Raridade:
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="temp-id">
            <input data-testid="trunfo-input" type="checkbox" />
          </label>

          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
