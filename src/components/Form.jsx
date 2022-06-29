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
      filterName,
      rarityFilter,
      superTrunfo,
      superTrunfoFunc,
      disabledByTrunfoFilter,
    } = this.props;

    const checkBoxElement = (
      <label htmlFor="cardTrunfo">
        Carta do tipo Super Trunfo?
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <form>

        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="cardAttr1"
            min="0"
            max="90"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="cardAttr2"
            min="0"
            max="90"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            id="cardAttr3"
            min="0"
            max="90"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          URL da Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>

        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : checkBoxElement
        }

        <button
          data-testid="save-button"
          type="submit"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

        <label htmlFor="nameFilter">
          Filtrar cartas pelo nome
          <input
            type="text"
            data-testid="name-filter"
            disabled={ disabledByTrunfoFilter }
            onChange={ filterName }
          />
        </label>

        <label htmlFor="rarityFilter">
          Filtrar cartas pela Raridade
          <select
            data-testid="rare-filter"
            name="rarityFilter"
            disabled={ disabledByTrunfoFilter }
            onChange={ rarityFilter }
          >
            <option value="todas"> todas </option>
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Filtrar apenas Super Trunfo
          <input
            type="checkbox"
            name="superTrunfo"
            data-testid="trunfo-filter"
            checked={ superTrunfo }
            onChange={ superTrunfoFunc }
          />
        </label>
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
  filterName: PropTypes.func.isRequired,
  rarityFilter: PropTypes.func.isRequired,
  superTrunfo: PropTypes.bool.isRequired,
  superTrunfoFunc: PropTypes.func.isRequired,
  disabledByTrunfoFilter: PropTypes.bool.isRequired,
};

export default Form;
