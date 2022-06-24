import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="name-input" type="text" name="" id="" />
        <textarea
          data-testid="description-input"
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <input data-testid="attr1-input" type="number" name="" id="" />
        <input data-testid="attr2-input" type="number" name="" id="" />
        <input data-testid="attr3-input" type="number" name="" id="" />
        <input data-testid="image-input" type="text" name="" id="" />
        <select data-testid="rare-input" name="" id="">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div>
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
          <span>A carta será um Trunfo?</span>
        </div>
        <input data-testid="save-button" type="submit" value="Salvar" />
      </form>
    );
  }
}

export default Form;
