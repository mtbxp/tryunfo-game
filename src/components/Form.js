import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          Nome
          <input type="text" data-testid="name-input" />
          Descrição
          <textarea data-testid="description-input" />
          Attr01
          <input type="number" data-testid="attr1-input" />
          Attr02
          <input type="number" data-testid="attr2-input" />
          Attr03
          <input type="number" data-testid="attr3-input" />
          Imagem
          <input type="text" data-testid="image-input" />
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          Super Tryunfo
          <input type="checkbox" data-testid="trunfo-input" />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
