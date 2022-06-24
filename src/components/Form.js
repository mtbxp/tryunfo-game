import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        <input type="textarea" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito-raro">Muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
