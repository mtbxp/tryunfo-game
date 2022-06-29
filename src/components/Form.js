import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          <textarea data-testid="description-input" />
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
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
