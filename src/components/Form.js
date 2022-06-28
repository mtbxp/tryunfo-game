import React, { Component } from 'react';
import '../index.css';
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="addCard">
            Adicionar nova carta
            <p>Nome</p>
            <input
              data-testid="name-input"
              type="text"
              id="addCard"
              placeholder="Placeholder"
              name="cardName"
              onChange={ onInputChange }
              value={ cardName }

            />
          </label>

          <label htmlFor="describe">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
              id="describe"
              name="cardDescription"
              cols="30"
              rows="10"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>

          <label htmlFor="number1">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="number1"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>

          <label htmlFor="number2">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="number2"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>

          <label htmlFor="number3">
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="number3"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>

          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              placeholder="Placeholder"
              id="rarity"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option
                value="normal"
              >
                normal
              </option>
              <option
                value="raro"
              >
                raro
              </option>
              <option
                value="muito raro"
              >
                muito raro
              </option>
            </select>
          </label>

          <label
            className="checkbox"
            htmlFor="checkbox"
          >
            <input 
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>

          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            data-testid="save-button"
          >
            Entrar
          </button>
        </form>
      </main>
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
