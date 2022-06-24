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

        <h1>Adicionar nova carta </h1>

        <label htmlFor="name-input">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            id="name-input"
          />
        </label>

        <br />

        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="input-description"
          />
        </label>

        <br />

        <label htmlFor="attr1-input">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
          />
        </label>

        <br />

        <label htmlFor="attr2-input">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
          />
        </label>

        <br />

        <label htmlFor="attr3-input">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
          />
        </label>

        <p>Pontos restantes = 000</p>

        <br />

        <label htmlFor="image-input">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            id="image-input"
          />
        </label>

        <br />

        <label htmlFor="rare-input">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name=""
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <br />

        <label htmlFor="trunfo-input">
          Super Trybe Tunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
          />
        </label>

        <br />

        <button
          type="submit"
          data-testid="save-button"
          id="save-button"
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
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
