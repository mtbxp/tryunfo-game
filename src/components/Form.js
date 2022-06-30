import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" data-testid="name-input" />
          <br />
          <textarea data-testid="description-input" />
          <br />
          <input type="number" data-testid="attr1-input" />
          <br />
          <input type="number" data-testid="attr2-input" />
          <br />
          <input type="number" data-testid="attr3-input" />
          <br />
          <input type="text" data-testid="image-input" />
          <br />
          <select data-testid="rare-input">
            <option>
              Normal
            </option>
            <option>
              Raro
            </option>
            <option>
              Muito Raro
            </option>
          </select>
          <br />
          <label htmlFor="super_trunfo">
            <input type="checkbox" data-testid="trunfo-input" id="super_trunfo" />
            Super Trunfo
          </label>
          <br />
          <button data-testid="save-button" type="button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
