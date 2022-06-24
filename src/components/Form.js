import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Nome
            <input type="text" data-testid="name-input" />
          </label>
          <label>
            Descrição
            <textarea data-testid="description-input" />
          </label>
          <label>
            Attr01
            <input type="number" data-testid="attr1-input" />
          </label>
          <label>
            Attr02
            <input type="number" data-testid="attr2-input" />
          </label>
          <label>
            Attr03
            <input type="number" data-testid="attr3-input" />
          </label>
          <label>
            Imagem
            <input type="text" data-testid="image-input" />
          </label>
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label>
            Super Tryunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
