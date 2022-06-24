import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="text"
            name="text"
          />
        </label>
        <label htmlFor="descricao">
          Descrição Carta:
          <textarea
            id="descricao"
            name="descricao"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="speed">
          Speed:
          <input
            type="number"
            data-testid="attr1-input"
            id="speed"
            name="speed"
          />
        </label>
        <label htmlFor="skill">
          Skill:
          <input
            type="number"
            data-testid="attr2-input"
            id="skill"
            name="skill"
          />
        </label>
        <label htmlFor="power">
          Power:
          <input
            type="number"
            data-testid="attr3-input"
            id="power"
            name="power"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="image"
            name="image"
          />
        </label>
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="check">
          Carta Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="check"
            name="check"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
