import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="card-form">
          <label htmlFor="card-name">
            Nome da Carta:
            <input
              type="text"
              name="card-name"
              id="card-name"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="card-description">
            Descrição da carta:
            <textarea
              name="card-description"
              id="card-description"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="card-attr1">
            Atributo 1:
            <input
              type="number"
              name="card-attr1"
              id="card-attr1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="card-attr2">
            Atributo 2:
            <input
              type="number"
              name="card-attr2"
              id="card-attr2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="card-attr3">
            Atributo 3:
            <input
              type="number"
              name="card-attr3"
              id="card-attr3"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="card-image">
            Imagem URL:
            <input
              type="text"
              name="card-image"
              id="card-image"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="card-rare">
            Raridade da carta:
            <select data-testid="rare-input" name="card-rare" id="card-rare">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="card-super-trunfo">
            Super Trunfo:
            <input
              type="checkbox"
              name="card-super-trunfo"
              id="card-super-trunfo"
              data-testid="trunfo-input"
            />
          </label>

          <button
            type="submit"
            disabled
            name="card-save-button"
            id="card-save-button"
            data-testid="save-button"
          >
            Salvar Carta
          </button>
        </form>
      </div>
    );
  }
}
// Form.propTypes = {

// };

export default Form;
