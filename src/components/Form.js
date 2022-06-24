import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          <input
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="descricao">
          <textarea
            data-testid="description-input"
          />
        </label>

        <label htmlFor="atr1">
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="atr2">
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="atr3">
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="img">
          <input
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="cardRaro">
          <select
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <button data-testid="save-button" type="button">Salvar</button>

      </form>
    );
  }
}

export default Form;
