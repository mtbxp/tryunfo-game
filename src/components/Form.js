import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
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
        <label htmlFor="nome">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            name="nome"
          />
        </label>
        <label htmlFor="Descricao">
          Descicao
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="Descicao"
          />
        </label>
        <label htmlFor="Atributo 1">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
            name="Atributo 1"
          />
        </label>
        <label htmlFor="Atributo 2">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
            name="Atributo 2"
          />
        </label>
        <label htmlFor="Atributo 3">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            name="Atributo"
          />
        </label>
        <label htmlFor="Image">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            name="Image"
          />
        </label>
        <label htmlFor="Raridade">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="Raridade"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="Trunfo">
          <input
            onChange={ onInputChange }
            type="checkbox"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            name="Trunfo"
          />
        </label>

        <input
          value="Salvar"
          onChange={ onInputChange }
          type="button"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        />
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
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
