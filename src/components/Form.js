import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>

          <label htmlFor="name">
            <input type="text" name="name" data-testid="name-input" />
          </label>

          <label htmlFor="description">
            <input type="textarea" name="description" data-testid="description-input" />
          </label>

          <label htmlFor="attr1">
            <input type="number" name="attr1" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2">
            <input type="number" name="attr2" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3">
            <input type="number" name="attr3" data-testid="attr3-input" />
          </label>

          <label htmlFor="image">
            <input type="text" name="image" data-testid="image-input" />
          </label>

          <label htmlFor="rare">
            <select name="rare" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-checkbox">
            <input type="checkbox" name="trunfo-checkbox" data-testid="trunfo-input" />
          </label>

          <button type="button" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
