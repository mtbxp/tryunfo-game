import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="card_name">
            <input type="text" data-testid="name-input" id="card_name" />
          </label>
          <label htmlFor="card_description">
            <textarea data-testid="description-input" id="card_description" />
          </label>
          <label htmlFor="card_attr1">
            <input type="number" data-testid="attr1-input" id="card_attr1" />
          </label>
          <label htmlFor="card_attr2">
            <input type="number" data-testid="attr2-input" id="card_attr2" />
          </label>
          <label htmlFor="card_attr3">
            <input type="number" data-testid="attr3-input" id="card_attr3" />
          </label>
          <label htmlFor="card_image">
            <input type="text" data-testid="image-input" id="card_image" />
          </label>
          <label htmlFor="card_rare">
            <select data-testid="rare-input" id="card_rare">
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
          </label>
          <label htmlFor="super_trunfo">
            <input type="checkbox" data-testid="trunfo-input" id="super_trunfo" />
            Super Trunfo
          </label>
          <label htmlFor="button">
            <input data-testid="save-button" type="button" id="button" value="Salvar" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
