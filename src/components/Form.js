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
      <form>
        <label htmlFor="nomeCarta">
          Nome da carta:
          <input
            data-testid="name-input"
            type="text"
            id="nomeCarta"
            value={ cardName }
            onChange={ onInputChange }

          />
        </label>
        <label htmlFor="descricaoCarta">
          Descrição da carta:
          <input
            data-testid="description-input"
            type="textarea"
            id="descricaoCarta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            id="atributo1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            id="atributo2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            id="atributo3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagemCarta">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            id="imagemCarta"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" selected>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
