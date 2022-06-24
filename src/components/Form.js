import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name-input">
          <input
            id="card-name-input"
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="card-description-input">
          <input
            id="card-description-input"
            data-testid="description-input"
            type="textarea"
          />
        </label>

        <label htmlFor="card-attr1-input">
          <input
            id="card-attr1-input"
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="card-attr2-input">
          <input
            id="card-attr2-input"
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="card-attr3-input">
          <input
            id="card-attr3-input"
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="card-img-input">
          <input
            id="card-img-input"
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="card-rarity-select">
          <select
            id="card-rarity-select"
            data-testid="rare-input"
            type="select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="card-super-input">
          <input
            id="card-super-input"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
