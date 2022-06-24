import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form style={ { display: 'flex', flexDirection: 'column' } }>
        <label htmlFor="cardName">
          Name:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Description:
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Speed:
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Skill:
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Power:
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          Image:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="cardRare">
          Rareness:
          <select
            name="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Tryunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <div>
          <button
            type="submit"
            disabled="true"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
