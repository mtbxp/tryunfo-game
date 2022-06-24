import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
        />
        <textarea
          name="cardDescription"
          data-testid="description-input"
        />
        <input
          type="number"
          name="cardAtribute1"
          data-testid="attr1-input"
        />
        <input
          type="number"
          name="cardAtribute2"
          data-testid="attr2-input"
        />
        <input
          type="number"
          name="cardAtribute3"
          data-testid="attr3-input"
        />
        <input
          type="text"
          name="cardUrl"
          data-testid="image-input"
        />
        <select
          name="cardRarity"
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <input
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
        />
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;
