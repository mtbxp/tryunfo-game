import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <fieldset>
        <div>
          <label htmlFor="1">
            Nome da carta:
            <input
              data-testid="name-input"
              id="1"
              type="text"
              name="cartName"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="2">
            Descrição:
            <input
              data-testid="description-input"
              id="2"
              type="textarea"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="3">
            História:
            <input
              data-testid="attr1-input"
              id="3"
              type="number"
              name="historia"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="4">
            Inteligência:
            <input
              data-testid="attr2-input"
              id="4"
              type="number"
              name="inteligencia"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="5">
            Carisma:
            <input
              data-testid="attr3-input"
              id="5"
              type="number"
              name="carisma"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="6">
            Image da carta
            <input
              data-testid="image-input"
              id="6"
              type="text"
              name="URL"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="7">
            Raridade
            <select
              data-testid="rare-input"
              id="7"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="8">
            <input
              data-testid="trunfo-input"
              id="8"
              type="checkbox"
              name="superTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Carta super trunfo
          </label>
        </div>
        <button
          data-testid="save-button"
          type="button"
          name="buttonSave"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
