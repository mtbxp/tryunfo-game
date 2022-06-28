import React from 'react';
import '../styles/form.css';
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
        <label htmlFor="name-input">
          Nova Carta
          <input
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="force">
          Força
          <input
            data-testid="attr1-input"
            value={ cardAttr1 }
            type="number"
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="speed">
          Velocidade
          <input
            data-testid="attr2-input"
            value={ cardAttr2 }
            type="number"
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="power">
          Poder
          <input
            data-testid="attr3-input"
            value={ cardAttr3 }
            type="number"
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image">
          Url da Imagem
          <input
            data-testid="image-input"
            value={ cardImage }
            type="text"
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        {
          hasTrunfo ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          ) : (
            <label htmlFor="super" className="super-check">
              <span>Essa carta é um Super Trunfo?</span>
              <input
                checked={ cardTrunfo }
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id="super"
                onChange={ onInputChange }
              />
            </label>
          )
        }
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
