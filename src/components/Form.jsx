import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
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
      onSaveButtonClick } = this.props;

    const trunfoCheckbox = (
      <label
        htmlFor="trunfo-input"
      >
        Carta Super Trunfo
        <input
          type="checkbox"
          name="trunfoInput"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <form>

        <label
          htmlFor="name-input"
        >
          Nome do personagem:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="description-input"
        >
          Descrição:
          <textarea
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          >
            a
          </textarea>
        </label>

        <label
          htmlFor="attr1-input"
        >
          Fofoqueiro:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="attr2-input"
        >
          Engraçado:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="attr3-input"
        >
          Perigoso:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="image-input"
        >
          Foto do personagem:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="rare-input"
        >
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { hasTrunfo
          ? <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>
          : trunfoCheckbox }

        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar trunfo
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
