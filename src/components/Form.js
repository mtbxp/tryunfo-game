import React from 'react';

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { };
  // }

  render() {
    return (
      <form>
        <label htmlFor="name-card">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            id="name-card"
          />
        </label>
        Descrição
        <label htmlFor="description">
          <textarea
            data-testid="description-input"
            type="text"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Vida
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Velocidade
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Força
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            data-testid="image-input"
            type="text"
            id="image"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select data-testid="rare-input" id="rare">
            <option value="normal" selected>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Carta Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
          />
        </label>
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
