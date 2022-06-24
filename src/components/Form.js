import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
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
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descripion">
          Descrição:
          <textarea
            data-testid="description-input"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attack">
          Attack:
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="defense">
          Defense:
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="speed">
          Speed:
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          imagem:
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>
              --selecione--
            </option>
            <option
              value="normal"
              name="normal"
            >
              { cardRare }
            </option>
            <option
              value="raro"
              name="raro"
            >
              { cardRare }
            </option>
            <option
              value="muito raro"
              name="muito raro"
            >
              { cardRare }
            </option>
          </select>
        </label>
        <label htmlFor="checked">
          { cardRare }
          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
