import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="container">
          Nome:
          <input
            data-testid="name-input"
            type="text"
          />
        </div>
        <div className="container">
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
          />
        </div>
        <div className="container">
          Agua:
          <input
            data-testid="attr1-input"
            type="number"
          />
        </div>
        <div className="container">
          Fogo:
          <input
            data-testid="attr2-input"
            type="number"
          />
        </div>
        <div className="container">
          Vento:
          <input
            data-testid="attr3-input"
            type="number"
          />
        </div>
        <div className="container">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
          />
        </div>
        <div className="container">
          Raridade:
          <select
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="container">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
        </div>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
