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
      <form>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="attr1"
              id="attr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              name="attr2"
              id="attr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              name="attr3"
              id="attr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Image
            <input
              type="text"
              name="image"
              id="image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare">
            Rarity
            <select
              name="rare"
              id="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="trunfo">
                <input
                  type="checkbox"
                  name="trunfo"
                  id="trunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trunfo
              </label>
            )}
        </div>
        <div>
          <button
            type="button"
            id="save"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
