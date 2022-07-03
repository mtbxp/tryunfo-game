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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h1>Adicionar nova carta</h1>

        <form className="new-card-form">

          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição
            <input
              type="textarea"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Cores
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Duração
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Crackling
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="cardTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            id="save"
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
