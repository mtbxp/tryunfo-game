import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name-input"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            type="number"
            name="attr1-input"
            id="attr1-input"
            max={ 5 }
            min={ 1 }
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            type="number"
            name="attr2-input"
            id="attr2-input"
            max={ 5 }
            min={ 1 }
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            type="number"
            name="attr3-input"
            id="attr3-input"
            max={ 5 }
            min={ 1 }
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="image-input"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <select
          name="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          Raridade
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label
          htmlFor="trunfo-input"
          className="check-container"
        >
          É o trunfo?
          <input
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <input
          type="button"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        />
      </div>
    );
  }
}

export default Form;

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
