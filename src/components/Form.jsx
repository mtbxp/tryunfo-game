import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              name="name-input"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="textarea"
              data-testid="description-input"
              name="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            <select name="rare-input" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
            />
          </label>
          <button
            type="button"
            name="save-button"
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
