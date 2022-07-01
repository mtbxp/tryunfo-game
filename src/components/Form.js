import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="card_name">
            <input
              name="cardName"
              type="text"
              data-testid="name-input"
              id="card_name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_description">
            <textarea
              name="cardDescription"
              data-testid="description-input"
              id="card_description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_attr1">
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              id="card_attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_attr2">
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              id="card_attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_attr3">
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              id="card_attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_image">
            <input
              name="cardImage"
              type="text"
              data-testid="image-input"
              id="card_image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card_rare">
            <select
              name="cardRare"
              data-testid="rare-input"
              id="card_rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>
                normal
              </option>
              <option>
                raro
              </option>
              <option>
                muito raro
              </option>
            </select>
          </label>
          <label htmlFor="super_trunfo">
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              id="super_trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
          <label htmlFor="button">
            <input
              data-testid="save-button"
              type="submit"
              id="button"
              value="Salvar"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            />
          </label>
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
