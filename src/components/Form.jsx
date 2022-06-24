import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      // hasTrunfo,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={ cardName }
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ cardDescription }
            type="textarea"
            name="description"
            id="description"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute1">
          Atributo 1
          <input
            value={ cardAttr1 }
            type="number"
            name="attribute1"
            id="attribute1"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2
          <input
            value={ cardAttr2 }
            type="number"
            name="attribute2"
            id="attribute2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3
          <input
            value={ cardAttr3 }
            type="number"
            name="attribute3"
            id="attribute3"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            value={ cardRare }
            name="rare"
            id="rare"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="check-trunfo">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            type="checkbox"
            name="check-trunfo"
            id="check-trunfo"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          name="button"
          id="button"
          data-testid="save-button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
