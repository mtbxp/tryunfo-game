import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const rarity = ['normal', 'raro', 'muito raro'];
    return (
      <form>
        <Input
          type="text"
          data-testid="name-input"
          label="Nome:"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="form-description">
          Descrição:
          <textarea
            id="form-description"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <Input
          type="number"
          data-testid="attr1-input"
          label="Speed:"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          data-testid="attr2-input"
          label="Strength:"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          data-testid="attr3-input"
          label="Dexterity:"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          data-testid="image-input"
          label="Image URL:"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="form-rarity">
          Rarity:
          <select
            data-testid="rare-input"
            id="form-rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            {rarity.map((tier) => <option key={ tier }>{tier}</option>)}
          </select>
        </label>
        <Input
          type="checkbox"
          data-testid="trunfo-input"
          label="SuperTrunfo?"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
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
