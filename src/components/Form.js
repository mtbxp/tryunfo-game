import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          Nome:
          <input data-testid="name-input" type="text" />
        </div>
        <div>
          Descrição
          <textarea data-testid="description-input" />
        </div>
        <div>
          Atributo 1
          <input data-testid="attr1-input" />
        </div>
        <div>
          Atributo 2
          <input data-testid="attr2-input" />
        </div>
        <div>
          Atributo 3
          <input data-testid="attr3-input" />
        </div>
        <div>
          Imagem
          <input data-testid="image-input" />
        </div>
        <div>
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        <div>
          <input data-testid="trunfo-input" id="super-trunfo" type="checkbox" />
          Super Trunfo
        </div>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
