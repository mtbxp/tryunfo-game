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
        <form className="form">
          <h2 className="subtitle">Adicionar nova carta</h2>

          <label htmlFor=" cardName">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              type="textarea"
              name="description"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem Url:
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              type="select"
              name="rare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          { hasTrunfo ? (<h2>Você já tem um Super Trunfo em seu baralho</h2>) : (
            <label
              htmlFor="cardTrunfo"
            >
              Super Trunfo
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="trunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)}

          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            type="submit"
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
