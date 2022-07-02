import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="99"
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="99"
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="99"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            type="select"
            name="cardRare"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="cardTrunfo">
              Super Trunfo
              <input
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                id="cardTrunfo"
              />
            </label>)}
        <button
          type="submit"
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
  cardTrunfo: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
