import React from 'react';

class From extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome da carta:
          <input data-testid="name-input" name="nomeDaCarta" type="string" />
        </label>

        <label htmlFor="descricao">
          <textarea data-testid="description-input" name="primeiroAtributo" />
        </label>

        <label htmlFor="primeiroAtributo">
          <input data-testid="attr1-input" name="primeiroAtributo" type="number" />
        </label>

        <label htmlFor="segundoAtributo">
          <input data-testid="attr2-input" name="segundoAtributo" type="number" />
        </label>

        <label htmlFor="terceiroAtributo">
          <input data-testid="attr3-input" name="terceiroAtributo" type="number" />
        </label>

        <label htmlFor="img">
          <input data-testid="image-input" name="imagemCarta" type="string" />
        </label>

        <label htmlFor="raridade">
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          <input data-testid="trunfo-input" name="superTrunfo" type="checkbox" />
        </label>

        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default From;
