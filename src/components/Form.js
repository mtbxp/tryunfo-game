import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input type="text" data-testid="name-input" id="name-input" />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea data-testid="description-input" id="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input type="number" data-testid="attr1-input" id="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input type="number" data-testid="attr2-input" id="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input type="number" data-testid="attr3-input" id="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" data-testid="image-input" id="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade da carta:
          <select value="" data-testid="rare-input" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <input type="button" data-testid="save-button">Salvar</input>
      </form>
    );
  }
}

Form.propType = {
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    hasTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
    onInputChange: PropTypes.func,
    onSaveButtonClick: PropTypes.func,
}

export default Form;
