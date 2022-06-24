import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const hasTrunfoCard = () => {
      if (hasTrunfo) {
        return <p>Você já tem um Super Trunfo em seu baralho</p>;
      }
      return (<input
        id="card-super-input"
        data-testid="trunfo-input"
        type="checkbox"
        name="cardTrunfo"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      />);
    };

    return (
      <form>
        <label htmlFor="card-name-input">
          <input
            id="card-name-input"
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-description-input">
          <input
            id="card-description-input"
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attr1-input">
          <input
            id="card-attr1-input"
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attr2-input">
          <input
            id="card-attr2-input"
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attr3-input">
          <input
            id="card-attr3-input"
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-img-input">
          <input
            id="card-img-input"
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-rarity-select">
          <select
            id="card-rarity-select"
            data-testid="rare-input"
            type="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="card-super-input">
          {hasTrunfoCard()}
        </label>

        <button
          data-testid="save-button"
          type="submit"
          name="isSaveButtonDisabled"
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
