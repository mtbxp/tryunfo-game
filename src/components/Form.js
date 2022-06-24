import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="name-input">
            Nome
            <input name="name-input" type="text" data-testid="name-input" />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              name="description-input"
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              name="attr1-input"
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              name="attr2-input"
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              name="attr3-input"
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              name="image-input"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            Selecione a raridade
            <select
              name="rare-input"
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              name="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <button
            name="save-button"
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
