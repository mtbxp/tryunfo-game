import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  addRaridade(array) {
    return array.map((raridade, index) => <option key={ index }>{ raridade }</option>);
  }

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

    const options = ['normal', 'raro', 'muito raro'];

    return (
      <div>
        <form className="cardForm">
          <label htmlFor="cardName">
            Nome da Carta:
            <input
              type="text"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="cardImage">
            Imagem URL:
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="cardRare">
            Raridade da carta:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              { this.addRaridade(options) }
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              type="checkbox"
              name="cardTrunfo"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            name="card-save-button"
            id="card-save-button"
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar Carta
          </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  // hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
};

export default Form;
