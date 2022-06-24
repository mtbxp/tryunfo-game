import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <div>
          <label htmlFor="1">
            Nome da carta:
            <input
              data-testid="name-input"
              id="1"
              type="text"
              name="cartName"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="2">
            Inteligência:
            <input
              data-testid="description-input"
              id="2"
              type="textarea"
              name="description"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="3">
            Rapidez:
            <input
              data-testid="attr1-input"
              id="3"
              type="number"
              name="rapidez"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="4">
            Inteligência
            <input
              data-testid="attr2-input"
              id="4"
              type="number"
              name="inteligencia"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="5">
            Carisma
            <input
              data-testid="attr3-input"
              id="5"
              type="number"
              name=""
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="6">
            Image da carta
            <input
              data-testid="image-input"
              id="6"
              type="text"
              name="URL"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="7">
            Raridade
            <select data-testid="rare-input" id="7">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="8">
            <input
              data-testid="trunfo-input"
              id="8"
              type="checkbox"
              name="superTrunfo"
            />
            Carta super trunfo
          </label>
        </div>
        <button data-testid="save-button" type="submit">Salvar</button>
      </fieldset>
    );
  }
}

export default Form;
