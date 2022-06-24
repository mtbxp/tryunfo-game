import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
      //  hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              name="name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="textarea"
              data-testid="description-input"
              name="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            <select
              name="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            name="save-button"
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
