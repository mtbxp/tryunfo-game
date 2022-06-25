import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
// handleStates = ({target}) => {
  //     const { name, value } = target;
  //     this.setState({
  //         [name]: value,
  //     })
  // }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form id={ hasTrunfo }>
        <label htmlFor="name">
          Nome da Carta:
          <input
            name="nome"
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição da Carta:
          <textarea
            name="descricao"
            id="descricao"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            name="atributo1"
            id="atributo1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            name="atributo2"
            id="atributo2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            name="atributo3"
            id="atributo3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input
            name="imagem"
            id="imagem"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="selecionar">
          Raridade
          <select
            name="selecionar"
            id="selecionar"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>
              normal
            </option>
            <option>
              raro
            </option>
            <option>
              muito raro
            </option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Trybe Trunfo:
          <input
            name="checkbox"
            id="checkbox"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          id="button"
          type="reset"
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
