import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          <input type="textArea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
