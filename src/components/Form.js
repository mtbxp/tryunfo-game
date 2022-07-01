import React from 'react';
import propTypes from 'prop-types';

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
      <form>
        <label htmlFor="name-input">
          Nome da Carta:
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="nameInput"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="textarea"
            data-testid="description-input"
            id="description-input"
            name="descriptionInput"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="attr1Input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            defaultValue={ 0 }
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="attr2Input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            defaultValue={ 0 }
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="attr3Input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            defaultValue={ 0 }
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            placeholder="Url"
            type="text"
            data-testid="image-input"
            id="image-input"
            name="imageInput"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            data-testid="rare-input"
            id="rare-input"
            name="rareInput"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="trunfoInput"
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
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};
