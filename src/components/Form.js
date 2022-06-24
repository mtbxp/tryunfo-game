import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              name="name"
            />
          </label>
          <br />
          <br />
          <label htmlFor="descrip">
            Descrição:
            <textarea
              data-testid="description-input"
              name="descrip"
              rows="5"
              cols="20"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr01">
            Attr01:
            <input
              data-testid="attr1-input"
              type="number"
              name="attr01"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr02">
            Attr02:
            <input
              data-testid="attr2-input"
              type="number"
              name="attr02"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr03">
            Attr03:
            <input
              data-testid="attr3-input"
              type="number"
              name="attr03"
            />
          </label>
          <br />
          <br />
          <label htmlFor="image">
            Imagem:
            <input
              data-testid="image-input"
              type="file"
              name="image"
            />
          </label>
          <br />
          <br />
          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="rare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muitoRaro">Muito Raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="trunfo"
            />
          </label>
          <br />
          <br />
          <button data-testid="save-button" name="save" type="submit">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
