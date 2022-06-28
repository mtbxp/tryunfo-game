import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Card Name:
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            id="name"
            required
          />
        </label>
        <label htmlFor="description">
          Card description:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description"
            name="cardDescription"
            required
          />
        </label>
        <label htmlFor="attr1">
          Strength:
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
            name="cardAttr1"
            required
          />
        </label>
        <label htmlFor="attr2">
          Agility:
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
            name="cardAttr2"
            required
          />
        </label>
        <label htmlFor="attr3">
          Intelligence:
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
            name="cardAttr3"
            required
          />
        </label>
        <label htmlFor="img-text">
          image path:
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            id="img-text"
            name="cardImage"
            required
          />
        </label>
        <label htmlFor="rarity">
          Card rarity:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rarity"
            name="cardRare"
            required
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          This card is an trump
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo"
            name="cardTrunfo"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="isSaveButtonDisabled"
          id="submit-btn"
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
