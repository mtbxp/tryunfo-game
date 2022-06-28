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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const has = () => {
      if (hasTrunfo === false) {
        return (
          <input
            type="checkbox"
            name="trunfo"
            value={ cardTrunfo }
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />);
      } return <p value={ cardTrunfo }>Você já tem um Super Trunfo em seu baralho</p>;
    };

    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descripion">
          Descrição:
          <textarea
            data-testid="description-input"
            type="text"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attack">
          Attack:
          <input
            data-testid="attr1-input"
            type="number"
            name="attack"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="defense">
          Defense:
          <input
            data-testid="attr2-input"
            type="number"
            name="defence"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="speed">
          Speed:
          <input
            data-testid="attr3-input"
            type="number"
            name="speed"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          imagem:
          <input
            data-testid="image-input"
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          Raridade:
          <select
            data-testid="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" name="normal">
              Normal
            </option>
            <option value="raro" name="raro">
              Raro
            </option>
            <option value="muito raro" name="muito raro">
              Muito Raro
            </option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          { has() }
        </label>
        <button
          data-testid="save-button"
          type="submit"
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
