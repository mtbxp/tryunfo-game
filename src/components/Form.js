import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          <input type="text" id="card-name" data-testid="name-input" />
        </label>
        <label htmlFor="card-description">
          <textarea id="card-description" data-testid="description-input" />
        </label>
        <label htmlFor="card-attr1">
          <input type="number" id="card-attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="card-attr2">
          <input type="number" id="card-attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="card-attr3">
          <input type="number" id="card-attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="card-image">
          <input type="text" id="card-image" data-testid="image-input" />
        </label>
        <label htmlFor="card-rare">
          <select id="card-rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="card-trunfo">
          <input type="checkbox" id="card-trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
