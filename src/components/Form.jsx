import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div id="form">
        <label htmlFor="text">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Super Trunfo
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="superTrunfo"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            )}
        </label>

        <button
          data-testid="save-button"
          type="button"
          name="isSaveButtonDisabled"
          value={ isSaveButtonDisabled }
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
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
