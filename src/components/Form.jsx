import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form">
        <input
          type="text"
          value={ cardName }
          name="cardName"
          data-testid="name-input"
          onChange={ onInputChange }
          placeholder="Nome da carta"
        />
        <input
          type="textarea"
          value={ cardDescription }
          name="cardDescription"
          data-testid="description-input"
          onChange={ onInputChange }
          placeholder="Descrição da carta"
        />
        <input
          type="number"
          value={ cardAttr1 }
          name="cardAttr1"
          data-testid="attr1-input"
          min="0"
          max="90"
          onChange={ onInputChange }
          placeholder="1° Atributo"
        />
        <input
          type="number"
          value={ cardAttr2 }
          name="cardAttr2"
          data-testid="attr2-input"
          min="0"
          max="90"
          onChange={ onInputChange }
          placeholder="2° Atributo"
        />
        <input
          type="number"
          value={ cardAttr3 }
          name="cardAttr3"
          data-testid="attr3-input"
          min="0"
          max="90"
          onChange={ onInputChange }
          placeholder="3° Atributo"
        />
        <input
          type="text"
          value={ cardImage }
          name="cardImage"
          data-testid="image-input"
          onChange={ onInputChange }
          placeholder="Imagem"
        />
        <label htmlFor="trunfo">
          <select
            value={ cardRare }
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
          : (
            <input
              type="checkbox"
              checked={ cardTrunfo }
              name="cardTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />)}
        <button
          type="button"
          value={ isSaveButtonDisabled }
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
