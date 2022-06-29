import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="temp-id">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="temp-id">
            Descrição:
            <input
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="temp-id">
            Atributo 1:
            <input
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="temp-id">
            Atributo 2:
            <input
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }

            />
          </label>

          <label htmlFor="temp-id">
            Atributo 3:
            <input
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="temp-id">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="temp-id">
            Raridade:
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="temp-id">
            <input
              name={ hasTrunfo }
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
