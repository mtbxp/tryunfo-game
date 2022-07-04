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
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="input-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        Descrição
        <label htmlFor="input-description">
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="input-description"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="input-attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="input-attr01"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="input-attr02">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="input-attr02"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="input-attr03">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="input-attr03"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="input-img">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="input-img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="input-rare">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="input-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? (
            <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="input-trunfo">
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id="input-trufo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )
        }
        <button
          data-testid="save-button"
          type="submit"
          id="input-save"
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
