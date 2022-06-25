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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="user">
          Nome:
          <input
            id="user"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 01:
          <input
            id="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 02:
          <input
            id="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 03:
          <input
            id="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Imagem:
          <input
            id="imagem"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="select">
          Raridade:
          <select
            id="select"
            value={ cardRare }
            onChange={ onInputChange }
            type="select"
            data-testid="rare-input"
          >
            <option value="normal">
              normal
            </option>
            <option value="raro">
              raro
            </option>
            <option value="muito raro">
              muito raro
            </option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          value={ cardAttr1 }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.PropTypes = {
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
