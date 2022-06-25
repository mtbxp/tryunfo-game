import React from 'react';
import '../index.css';

class From extends React.Component {
  render() {
    return (
      <div className="contanerNewLetter">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="nameLetter">
          <input
            type="text"
            data-testid="name-input"
            name="nameLetter"
          />
        </label>

        <label htmlFor="descLetter">
          <input
            type="textarea"
            name="descLetter"
            value=""
            data-testid="description-input"
          />
        </label>

        <label htmlFor="firstAtb">
          <input
            type="number"
            name="firstAtb"
            value=""
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="secondAtb">
          <input
            type="number"
            name="secondAtb"
            value=""
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="threeAtb">
          <input
            type="number"
            name="threeAtb"
            value=""
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imgLetter">
          <input
            type="text"
            name="imgLetter"
            value=""
            data-testid="image-input"
          />
        </label>

        <div>
          <select
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>

        <label htmlFor="checkLetter">
          <input
            type="checkbox"
            name="checkLetter"
            value=""
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          name="btnLetter"
          data-testid="save-button"
        >
          Salvar
        </button>

      </div>
    );
  }
}

export default From;
