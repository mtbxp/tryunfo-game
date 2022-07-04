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
      onSaveButtonClick,
      onInputChange,
    } = this.props;

    return (
      <div className="Form">
        <label htmlFor="cardName">
          Gaga Name:
          <input
            data-testid="name-input"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1__input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2__input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3__input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image__input">
          <input
            data-testid="image-input"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <div>
          The Fame:
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Monster</option>
            <option value="raro">G.U.Y</option>
            <option value="muito raro">Venus</option>
          </select>
        </div>
        { hasTrunfo ? <h4>Você já tem um Super Trunfo em seu baralho</h4>
          : (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                name="cardTrunfo"
                data-testid="trunfo-input"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
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
