import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
        <label htmlFor="name-input">
          <input
            onChange={ onInputChange }
            value={ cardName }
            name="cardName"
            id="name-input"
            data-testid="name-input"
            type="text"
            placeholder="Nome da carta"
          />
        </label>

        <textarea
          onChange={ onInputChange }
          value={ cardDescription }
          name="cardDescription"
          data-testid="description-input"
          placeholder="Descrição da carta"
        >
          bla bla
        </textarea>

        <label htmlFor="attr1-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr1 }
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            placeholder="Atributo 1"
          />
        </label>

        <label htmlFor="attr2-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr2 }
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            placeholder="Atributo 2"
          />
        </label>

        <label htmlFor="attr3-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr3 }
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            placeholder="Atributo 3"
          />
        </label>

        <label htmlFor="image-input">
          <input
            onChange={ onInputChange }
            value={ cardImage }
            name="cardImage"
            type="text"
            data-testid="image-input"
            id="image-input"
            placeholder="Adicione a imagem"
          />
        </label>

        <select
          onChange={ onInputChange }
          value={ cardRare }
          name="cardRare"
          data-testid="rare-input"
          id="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            value={ cardTrunfo }
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
          />
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
