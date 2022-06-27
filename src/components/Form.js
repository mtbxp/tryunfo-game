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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
          />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="atribute1"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="atribute2"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="atribute3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="imagePath"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade da carta:
          <select
            data-testid="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="superTrunfo"
          />
        </label>
        <input
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
