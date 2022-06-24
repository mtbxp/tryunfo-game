import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nomeCarta">
            <input id="nomeCarta" type="text" data-testid="name-input" name="nomeCarta" />
          </label>
          <label htmlFor="descricao">
            <textarea id="descricao" data-testid="description-input" />
          </label>
          <label htmlFor="primeiroAtributo">
            <input id="primeiroAtributo" type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="segundoAtributo">
            <input id="segundoAtributo" type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="terceiroAtributo">
            <input id="terceiroAtributo" type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="urlImg">
            <input id="urlImg" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="raridadeCard">
            <select id="raridadeCard" data-testid="rare-input">
              <option value="">normal</option>
              <option value="">raro</option>
              <option value="">muito raro</option>
            </select>
          </label>
          <label htmlFor="sp">
            <input id="sp" type="checkbox" data-testid="trunfo-input" />
          </label>
          <button id="salvar" type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
