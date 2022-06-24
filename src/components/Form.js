import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome da carta
            <input id="name-input" type="text" data-testid="name-input" />
          </label>

          <label htmlFor="description-input">
            Descrição da carta
            <textarea id="description-input" data-testid="description-input" />
          </label>

          <label htmlFor="attr1-input">
            Atributo que mais combinar1
            <input id="attr1-input" type="number" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2-input">
            Atributo que mais combinar2
            <input id="attr2-input" type="number" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3-input">
            Atributo que mais combinar3
            <input id="attr3-input" type="number" data-testid="attr3-input" />
          </label>

          <label htmlFor="image-input">
            Insere o caminho para a imagem da carta
            <input id="image-input" type="text" data-testid="image-input" />
          </label>

          <label htmlFor="rare-input">
            Inserir raridade da carta
            <select id="rare-input" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Carta super trunfo
            <input
              id="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>

          <button id="save-button" type="button" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
