import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="descrição">
            <textarea data-testid="description-input"> </textarea>
          </label>
          <label htmlFor="atribuição-um">
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="atribuição-dois">
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="atribuição-três">
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="imagem">
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="raridade">
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="inserir">
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
