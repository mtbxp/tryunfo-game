import PropType from 'prop-types';
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
      onSaveButtonClick } = this.props;
    return (
      <form onSubmit={ this.formSubmitSaveCard }>
        <fieldset>
          <label htmlFor="cardName">
            <span>Name</span>
            <input
              id="cardName"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardDescription">
            <span>card attribute</span>
            <input
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              data-testid="description-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardAttr1">
            <span>Card First attribute</span>
            <input
              id="cardAttr1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardAttr2">
            <span>Card Second attribute</span>
            <input
              id="cardAttr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardAttr3">
            <span>Card Third attribute</span>
            <input
              id="cardAttr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardImage">
            <span>Image URL</span>
            <input
              id="cardImage"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              type="Text"
              data-testid="image-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardRare">
            <span>Insert Rarity</span>
            <select
              id="cardRare"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="cardTrunfo">
            <span>Card Super Trunfo</span>
            <input
              id="cardTrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
        </fieldset>
        <br />
        <hr />
        <br />
        <button
          name="cardAttr1"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          onChange={ onInputChange }
          type="submit"
          data-testid="save-button"
        >
          Save
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
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
