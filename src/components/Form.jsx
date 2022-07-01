import PropTypes from 'prop-types';
import React from 'react';

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
      <div>
        <form>
          <h3>Adicionar Nova Carta</h3>
          Nome:
          <label htmlFor="name-input">
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          Descrição:
          <label htmlFor="description-input">
            <input
              data-testid="description-input"
              type="text"
              name="cardDescription"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          Atributo 1:
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          Atributo 2:
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          Atributo 3:
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="attr2-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          Imagem:
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          Raridade:
          <label htmlFor="rare-imput">
            <select
              name="cardRare"
              data-testid="rare-input"
              id="rare-imput"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> Normal</option>
              <option value="raro"> Raro</option>
              <option value="muito raro"> Muito Raro</option>
            </select>
          </label>
          { hasTrunfo
            ? (
              <p data-testid="trunfo-input">
                Você já tem um Super Trunfo em seu baralho
              </p>
            )
            : (
              <label htmlFor="trunfo-input">
                <p>Super Trunfo</p>
                <input
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  type="checkbox"
                  id="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )}
          <button
            data-testid="save-button"
            type="submit"
            id="save-button"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
