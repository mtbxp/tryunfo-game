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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          <input
            type="textarea"
            data-testid="description-input"
            id="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            id="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="trunfo-input">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo-input"
                name="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>) }
        <button
          type="button"
          data-testid="save-button"
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
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
