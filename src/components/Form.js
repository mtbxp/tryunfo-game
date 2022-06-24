import React from 'react';

class From extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="name-input" type="text" />

        <input data-testid="description-input" type="textarea" />

        <input data-testid="attr1-input" type="number" />

        <input data-testid="attr2-input" type="number" />

        <input data-testid="attr3-input" type="number" />

        <input data-testid="image-input" type="text" />

        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <input data-testid="trunfo-input" type="checkbox" />

        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default From;
