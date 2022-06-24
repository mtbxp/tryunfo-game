import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name-input"
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            type="number"
            name="attr1-input"
            id="attr1-input"
            max={ 5 }
            min={ 1 }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            type="number"
            name="attr2-input"
            id="attr2-input"
            max={ 5 }
            min={ 1 }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            type="number"
            name="attr3-input"
            id="attr3-input"
            max={ 5 }
            min={ 1 }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <select name="select" data-testid="rare-input">
          Raridade
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="trunfo-input">
          É o trunfo?
          <input
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <input type="button" value="Salvar" data-testid="save-button" />
      </div>
    );
  }
}

export default Form;
