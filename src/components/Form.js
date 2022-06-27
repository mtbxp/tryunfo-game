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
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="card-name">
            Nome:

            <input
              type="text"
              data-testid="name-input"
              id="card-name"
              name="card-name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="playing-card-description">
            Descrição

            <input
              type="text-area"
              data-testid="description-input"
              id="playing-card-description"
              name="playing-card-description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="first-attribute">
            Attr01

            <input
              type="number"
              data-testid="attr1-input"
              id="first-attribute"
              name="first-attribute"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="second-attribute">
            Attr02

            <input
              type="number"
              data-testid="attr2-input"
              id="second-attribute"
              name="second-attribute"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="third-attribute">
            Attr03

            <input
              type="number"
              data-testid="attr3-input"
              id="third-attribute"
              name="third-attribute"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="playing-card-picture">
            Imagem

            <input
              type="text"
              data-testid="image-input"
              id="playing-card-picture"
              name="playing-card-picture"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-card">
            Raridade

            <select
              data-testid="rare-input"
              id="rare-card"
              name="rare-card"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>

          </label>

          <label htmlFor="trunfo-card">
            Super Trybe Trunfo

            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-card"
              name="trunfo-card"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            id="button"
            name="button"
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
