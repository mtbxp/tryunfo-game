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
        <label htmlFor="name-input">
          <span>Nome: </span>
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="name-input"
            placeholder="Digite o nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          <span>Descrição: </span>
          <input
            type="textarea"
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <div>
          <label htmlFor="attr1-input">
            <span>Habilidade: </span>
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            <span>Força: </span>
            <input
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="attr2-input"
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="attr3-input">
            <span>Vida: </span>
            <input
              className="input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="attr3-input"
              data-testid="attr3-input"
              type="number"
            />
          </label>
        </div>
        <label htmlFor="image-input">
          <span>Imagem: </span>
          <input
            placeholder="Digite o endereço da imagem"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image-input"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          <span>Raridade: </span>
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          <p data-testid="trunfo-input">
            Você já tem um Super Trunfo em seu baralho
          </p>
        ) : (
          <label htmlFor="trunfo-input">
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
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
