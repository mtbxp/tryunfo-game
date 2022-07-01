import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <div>
          <label htmlFor="name-input">
            Nome
            <input
              id="name-input"
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              name="cardDescription"
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
          <label htmlFor="attr01">
            Attr01
            <input
              id="attr01"
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr02">
            Attr02
            <input
              id="attr02"
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr03">
            Attr03
            <input
              id="attr03"
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Imagem
            <input
              id="image"
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rarity">
            Raridade
            <select
              name="cardRare"
              id="rarity"
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
          <label htmlFor="super-trunfo">
            <input
              id="super-trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        </div>
        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
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
