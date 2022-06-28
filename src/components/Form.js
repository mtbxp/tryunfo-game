import React from 'react';
import PropType from 'prop-types';

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
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            data-testid="description-input"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          attr1
          <input
            data-testid="attr1-input"
            id="attr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          attr2
          <input
            data-testid="attr2-input"
            id="attr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          attr3
          <input
            data-testid="attr3-input"
            id="attr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label htmlFor="image">
          url-image
          <input
            data-testid="image-input"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            id="raridade"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="superTrunfo">
              SuperTrunfo
              <input
                data-testid="trunfo-input"
                id="superTrunfo"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                type="checkbox"
              />
            </label>)}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
