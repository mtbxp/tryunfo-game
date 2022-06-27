import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
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
            name="card-name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Card description:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Strength:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Agility:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Intelligence:
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
            name="attr3"
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
            name="img-text"
          />
        </label>
        <label htmlFor="rarity">
          Card rarity:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rarity"
            name="rarity"
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
            name="trunfo"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          id="submit-btn"
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
