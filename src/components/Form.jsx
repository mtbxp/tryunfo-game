import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        <textarea cols="30" rows="10" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select name="raridade" id="" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <input type="checkbox" name="" id="" data-testid="trunfo-input" />
        <button type="submit" data-testid="save-button">Enviar</button>
      </div>
    );
  }
}

export default Form;
