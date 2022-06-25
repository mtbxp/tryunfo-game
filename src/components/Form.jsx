import PropTypes from 'prop-types';
import React, { Component } from 'react';

import '../styles/form.css';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <label htmlFor="name-input">
            Nome:
            <input
              className="input"
              placeholder="Digite o nome da carta"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              id="name-input"
              data-testid="name-input"
              type="text"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="description-input">
            Descrição:
            <textarea
              className="textarea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              id="description-input"
              data-testid="description-input"
              type="textarea"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="attr1-input">
            Habilidade:
            <input
              className="input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="attr1-input"
              data-testid="attr1-input"
              type="number"
              min="0"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="attr2-input">
            Força:
            <input
              className="input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="attr2-input"
              data-testid="attr2-input"
              type="number"
              min="0"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="attr3-input">
            Vida:
            <input
              className="input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="attr3-input"
              data-testid="attr3-input"
              type="number"
              min="0"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="image-input">
            Imagem:
            <input
              className="input"
              placeholder="Digite o endereço da imagem"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              id="image-input"
              data-testid="image-input"
              type="text"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="rare-input">
            Raridade:
            <select
              className="select"
              name="cardImage"
              value={ cardRare }
              onChange={ onInputChange }
              id="rare-input"
              data-testid="rare-input"
            >
              Raridade:
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label htmlFor="trunfo-input">
            <input
              className="input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              data-testid="trunfo-input"
            />
            Super Trunfo!
          </label>
        </div>
        <div className="container">
          <button
            className="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </div>
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
