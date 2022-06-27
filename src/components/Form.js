import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Form extends React.Component {
  render() {
    const { cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <label className="nomeCarta" htmlFor="inputText">
          Nome da Carta:
          <input
            data-testid="name-input"
            type="text"
            id="inputText"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>

        <label htmlFor="textArea">
          Descrição da Carta:
          <textarea
            data-testid="description-input"
            id="textArea"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>

        <label htmlFor="roteiro">
          Roteiro:
          <input
            data-testid="attr1-input"
            type="number"
            id="roteiro"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>

        <label htmlFor="personagens">
          Personagens:
          <input
            data-testid="attr2-input"
            type="number"
            id="personagens"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>

        <label htmlFor="direcao">
          Direção:
          <input
            data-testid="attr3-input"
            type="number"
            id="direcao"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>

        <label htmlFor="url">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            id="url"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Supertrunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
          name="salvar"
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
