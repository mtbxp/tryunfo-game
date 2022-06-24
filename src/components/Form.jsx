import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="text">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <textarea
            data-testid="description-input"
            name="descricao"
            id="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <fieldset id="attributes">
          <label htmlFor="attr1">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
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
              name="attr2"
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
              name="attr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </fieldset>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="rarity"
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
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
};

export default Form;
