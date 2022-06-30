import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="nameInput">
            <h3>Nome:</h3>
            <input
              id="nameInput"
              type="text"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descriptionInput">
            <h3>Descrição:</h3>
            <input
              type="textarea"
              data-testid="description-input"
              id="descriptionInput"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1Input">
            <h3> Attr01:</h3>
            <input
              type="number"
              min="0"
              max="90"
              data-testid="attr1-input"
              name="cardAttr1"
              id="attr1Input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2Input">
            <h3>Attr02:</h3>
            <input
              type="number"
              min="0"
              max="90"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3Input">
            <h3> Attr03:</h3>
            <input
              type="number"
              min="0"
              max="90"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="imageInput">
            <h3>Imagem:</h3>
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareInput">
            <h3>Raridade:</h3>
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoInput">
            <h3>Super Trybe Trunfo</h3>
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            name="saveButton"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
