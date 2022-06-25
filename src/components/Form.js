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
        <h1>Adicionar nova carta</h1>
        <label htmlFor="nameCard">
          <input
            data-testid="name-input"
            type="text"
            id="nameCard"
            placeholder="Nome"
            required
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descriptionCard">
          <textarea
            data-testid="description-input"
            type=""
            id="descriptionCard"
            placeholder="Descreva a carta"
            cols="30"
            rows="10"
            maxLength="500"
            required
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            placeholder="1º atributo"
            required
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            placeholder="2º atributo"
            required
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            placeholder="3º atributo"
            required
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imgCard">
          <input
            data-testid="image-input"
            type="text"
            id="imgCard"
            placeholder="insira o url da carta"
            required
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          <select
            type="select"
            data-testid="rare-input"
            id="rare"
            required
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option
              value="normal"
              id="nomal"
            >
              normal
            </option>
            <option
              value="raro"
              id="raro"
            >
              raro
            </option>
            <option
              value="muito raro"
              id="muitoRaro"
            >
              muito raro
            </option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            placeholder="Nome da carta"
            required
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
