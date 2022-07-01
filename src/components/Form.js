// @ts-nocheck
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Form extends Component {
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    const renderCheckBox = (
      <label className="labelForCardTrunfo" htmlFor="cardTrunfo">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );

    const disallowCheckBox = <p>Você já tem um Super Trunfo em seu baralho</p>;

    let checkBox;

    if (hasTrunfo) {
      checkBox = disallowCheckBox;
    } else {
      checkBox = renderCheckBox;
    }

    return (
      <form
        className="form"
        onSubmit={ onSaveButtonClick }
      >
        <label className="labelForCardName" htmlFor="cardName">
          Nome
          <input
            required
            data-testid="name-input"
            type="text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardDescription" htmlFor="cardDescription">
          Descrição
          <input
            required
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardAttr1" htmlFor="cardAttr1">
          cardAttr01
          <input
            required
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            min="0"
            max="90"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardAttr2" htmlFor="cardAttr2">
          cardAttr02
          <input
            required
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            min="0"
            max="90"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardAttr3" htmlFor="cardAttr3">
          cardAttr03
          <input
            required
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            min="0"
            max="90"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardImage" htmlFor="cardImage">
          Imagem
          <input
            required
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label className="labelForCardRare" htmlFor="cardRare">
          Raridade
          <select
            required
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
        <br />
        { checkBox }
        <br />
        <button
          data-testid="save-button"
          type="submit"
          name="saveBtn"
          id="saveBtn"
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

export default Form;
