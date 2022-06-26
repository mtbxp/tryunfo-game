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
        <form action="submit">
          <h2>Adicionar Sua Carta</h2>
          Nome:
          <label htmlFor="name-input">
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          Descrição da Carta:
          <label htmlFor="description-input">
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          1° Atributo:
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          2° Atributo:
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          3° Atributo:
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          URL da Imagem da Carta:
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          Escolha a Raridade da Carta:
          <label htmlFor="rare-input">
            <select
              data-testid="rare-input"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> NORMAL </option>
              <option value="raro"> RARO </option>
              <option value="muito raro"> MUITO RARO </option>
            </select>
          </label>
          Super Trunfo:
          <label htmlFor="trunfo-input">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>

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
