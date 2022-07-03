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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const options = ['normal', 'raro', 'muito raro'];

    return (
      <div className="container">
        <form className="cardForm">
          <h2>Adicionar Carta</h2>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
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
          </div>
          <div className="input-container">
            <label htmlFor="cardTrunfo">
              Super Trunfo:
              { hasTrunfo !== true
                ? (
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    data-testid="trunfo-input"
                  />
                )
                : 'Você já tem um Super Trunfo em seu baralho' }
            </label>
          </div>
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
