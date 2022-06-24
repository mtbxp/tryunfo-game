import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" id="name-input" />
        </label>
        <label htmlFor="description-input">
          <input type="textarea" data-testid="description-input" id="description-input" />
        </label>
        <label htmlFor="attr1-input">
          <input type="number" data-testid="attr1-input" id="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" data-testid="attr2-input" id="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" data-testid="attr3-input" id="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" data-testid="image-input" id="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input" id="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;