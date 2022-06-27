import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import '../styles/form.css';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="cardName">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            name="card-name"
            id="cardName"
            placeholder="Digite o nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="CardDescription">
          Descrição:
          <textarea
            type="textarea"
            data-testid="description-input"
            name="card-description"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <div>
          <label htmlFor="cardAttr1">
            Habilidade:
            <input
              type="number"
              data-testid="attr1-input"
              name="card-attr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            Força:
            <input
              name="card-attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="cardAttr2"
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="cardAttr3">
            Vida:
            <input
              name="card-attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="cardAttr3"
              data-testid="attr3-input"
              type="number"
            />
          </label>
        </div>
        <label htmlFor="cardImage">
          Imagem:
          <input
            placeholder="Digite o endereço da imagem"
            name="card-image"
            value={ cardImage }
            onChange={ onInputChange }
            id="cardImage"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade:
          <select
            name="card-rare"
            value={ cardRare }
            onChange={ onInputChange }
            id="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          'Você já tem um Super Trunfo em seu baralho'
        ) : (
          <label htmlFor="cardTrunfo">
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="card-trunfo"
              id="cardTrunfo"
              data-testid="trunfo-input"
            />
            <span>Super Trunfo!</span>
          </label>
        )}
        <button
          className="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
