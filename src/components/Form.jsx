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
        <label htmlFor="name">
          <span>Nome: </span>
          <input
            type="text"
            data-testid="name-input"
            name="name"
            placeholder="Digite o nome da carta"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          <span>Descrição: </span>
          <textarea
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <div>
          <label htmlFor="attr1">
            <span>Habilidade: </span>
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            <span>Força: </span>
            <input
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="attr2"
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="attr3">
            <span>Vida: </span>
            <input
              className="input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="attr3"
              data-testid="attr3-input"
              type="number"
            />
          </label>
        </div>
        <label htmlFor="image">
          Imagem:
          <input
            placeholder="Digite o endereço da imagem"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare"
            data-testid="rare-input"
          >
            Raridade:
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? ('Você já tem um Super Trunfo no seu baralho'
        ) : (
          <label htmlFor="trunfo">
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="cardTrunfo"
              id="trunfo"
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
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
