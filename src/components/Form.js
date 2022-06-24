import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="descripion">
          Descrição:
          <textarea data-testid="description-input" type="text" />
        </label>
        <label htmlFor="attack">
          Attack:
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="defense">
          Defense:
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="speed">
          Speed:
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          imagem:
          <input data-testid="image-input" type="text" />
        </label>
        <label htmlFor="select">
          Raridade:
          <select data-testid="rare-input" name="" id="">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="checked">
          Super Trunfo:
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </div>
    );
  }
}

export default Form;
