import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          Descrição
          <input type="textarea" name="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="atribute1">
          Atributo 1
          <input type="number" name="number1" data-testid="attr1-input" />
        </label>
        <label htmlFor="atribute2">
          Atributo 2
          <input type="number" name="number2" data-testid="attr2-input" />
        </label>
        <label htmlFor="atribute3">
          Atributo 3
          <input type="number" name="number3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select name="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          SuperTrunfo
          <input type="checkbox" name="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
