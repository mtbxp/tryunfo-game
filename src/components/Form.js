import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="user">
          Name:
          <input
            id="user"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <br />
        <label htmlFor="atribute1">
          Atribute 01:
          <input
            id="atribute1"
            name="atribute1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="atribute2">
          Atribute 02:
          <input
            id="atribute2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="atribute2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="atribute3">
          Atribute 03:
          <input
            id="atribute3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="atribute3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Image:
          <input
            id="imagem"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="select">
          Rare:
          <select
            id="select"
            name="select"
            value={ cardRare }
            onChange={ onInputChange }
            type="select"
            data-testid="rare-input"
          >
            <option value="normal">
              normal
            </option>
            <option value="raro">
              rare
            </option>
            <option value="muito raro">
              very raro
            </option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Save
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
