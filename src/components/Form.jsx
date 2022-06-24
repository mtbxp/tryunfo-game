import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="textarea"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attribute 01
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Attribute 02
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Attribute 03
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-link">
          Image Link
          <input
            type="text"
            name="image-link"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="types">
          Types
          <select
            data-testid="rare-input"
            name="types"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="super-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
