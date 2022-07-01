import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

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
      <form
        className="container form-group form-control form-horizontala"
      >
        <label
          className="control-label"
          htmlFor="nomeCarta"
        >
          Nome da carta:
          <input
            className="form-group"
            data-testid="name-input"
            type="text"
            id="nomeCarta"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }

          />
        </label>
        <label
          className="control-label"
          htmlFor="descricaoCarta"
        >
          Descrição da carta:
          <input
            data-testid="description-input"
            type="textarea"
            id="descricaoCarta"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label
          className="control-label"
          htmlFor="atributo1"
        >
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            id="atributo1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label
          className="control-label"
          htmlFor="atributo2"
        >
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            id="atributo2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label
          className="control-label"
          htmlFor="atributo3"
        >
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            id="atributo3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label
          className="control-label"
          htmlFor="imagemCarta"
        >
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            id="imagemCarta"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label
          className="control-label"
          htmlFor="raridade"
        >
          Raridade:
          <select
            className="slect"
            data-testid="rare-input"
            id="raridade"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <h2>Você já tem um Super Trunfo em seu baralho</h2> : (
          <label
            className="control-label"
            htmlFor="cardTrunfo"
          >
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )}

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
