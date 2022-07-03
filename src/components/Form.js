import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <h3>Adicionar nova carta</h3>
        <label htmlFor="card-name">
          <h5>Nome</h5>
          <input type="text" id="card-name" data-testid="name-input" />
        </label>
        <label htmlFor="card-description">
          <h5>Descrição</h5>
          <input type="textarea" id="card-description" data-testid="description-input" />
        </label>
        <label htmlFor="card-attr1">
          <h5>Atributo 1</h5>
          <input type="number" id="card-attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="card-attr2">
          <h5>Atributo 2</h5>
          <input type="number" id="card-attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="card-attr3">
          <h5>Atributo 3</h5>
          <input type="number" id="card-attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="card-image">
          <h5>Imagem</h5>
          <input type="text" id="card-image" data-testid="image-input" />
        </label>
        <label htmlFor="card-rare">
          <h5>Raridade</h5>
          <select id="card-rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito-raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="card-trunfo">
          <h5>Super Trunfo</h5>
          <input type="checkbox" id="card-trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </fieldset>
    );
  }
}

export default Form;
