import React from 'react';
import '../App.css';

class Form extends React.Component {
  render() {
    return (
      <form className="text-area">
        <label htmlFor="name">
          name
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="text-area">
          <textarea
            data-testid="description-input"
            name="text-area"
          />
        </label>
        <label htmlFor="number">
          <input data-testid="attr1-input" type="number" />
          <input data-testid="attr2-input" type="number" />
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          <select data-testid="rare-input">
            <option selected value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          <input data-testid="trunfo-input" type="checkbox" name="check" id="" />
        </label>
        <button data-testid="save-button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
