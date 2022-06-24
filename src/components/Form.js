import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    console.log(hasTrunfo);
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Letters name:
          <input
            data-testid="name-input"
            id="name"
            name="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="description">
          Letters description:
          <textarea
            data-testid="description-input"
            id="description"
            name="description"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atribute1">
          First atribute:
          <input
            data-testid="attr1-input"
            id="atribute1"
            name="atribute1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atribute2">
          Second atribute:
          <input
            data-testid="attr2-input"
            id="atribute2"
            name="atribute2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atribute3">
          Third atribute:
          <input
            data-testid="attr3-input"
            id="atribute3"
            name="atribute3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          Cards image:
          <input
            data-testid="image-input"
            id="image"
            name="image"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rarity">
          Cards rarity:
          <select
            data-testid="rare-input"
            id="rarity"
            name="rarity"
            type="select"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="joker">
          Is the card a joker?
          <input
            data-testid="trunfo-input"
            id="joker"
            type="checkbox"
            value={ cardTrunfo }
            onChange={ onInputChange }
            checked
          />
        </label>
        <br />
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
