import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inputText">
          Nome da Carta:
          <input data-testid="name-input" type="text" id="inputText" />
        </label>
        <label htmlFor="textArea">
          Descrição da Carta:
          <textarea data-testid="description-input" id="textArea" />
        </label>
        <label htmlFor="roteiro">
          Roteiro:
          <input data-testid="attr2-input" type="number" id="roteiro" />
        </label>
        <label htmlFor="personagens">
          Personagens:
          <input data-testid="attr1-input" type="number" id="personagens" />
        </label>
        <label htmlFor="direcao">
          Direção:
          <input data-testid="attr3-input" type="number" id="direcao" />
        </label>
        <label htmlFor="url">
          Imagem:
          <input data-testid="image-input" type="text" id="url" />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Supertrunfo:
          <input data-testid="trunfo-input" type="checkbox" id="superTrunfo" />
        </label>
        <button data-testid="save-button" type="submit" name="salvar">Salvar</button>
      </form>
    );
  }
}

export default Form;
