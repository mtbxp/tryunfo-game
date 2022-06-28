import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name-input">
            Nome
            <input type="text" data-testid="name-input" name="name-input" />
          </label>
        </div>
        <div>
          <label htmlFor="descricao">
            Descrição
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr01">
            Attr01
            <input type="number" data-testid="attr1-input" name="attr01" />
          </label>
        </div>
        <div>
          <label htmlFor="attr02">
            Attr02
            <input type="number" data-testid="attr2-input" name="attr02" />
          </label>
        </div>
        <div>
          <label htmlFor="attr03">
            Attr03
            <input type="number" data-testid="attr3-input" name="attr03" />
          </label>
        </div>
        <div>
          <label htmlFor="imagem">
            Imagem
            <input type="text" data-testid="image-input" name="imagem" />
          </label>
        </div>
        <div>
          <label htmlFor="raridade">
            Raridade
            <select name="raridade" id="raridade" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="super-trunfo">
            <input type="checkbox" data-testid="trunfo-input" name="super-trunfo" />
            Super Trunfo
          </label>
        </div>
        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </div>
    );
  }
}

export default Form;
