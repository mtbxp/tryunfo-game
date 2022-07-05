import React from 'react';
import PropTypes from 'prop-types';
import './components css/Form.css';

const rarities = ['normal', 'raro', 'muito raro'];

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
    return (
      <div className="form-div">
        <h2>Adicionar nova carta</h2>
        <div className="input-container">
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              id="name"
              name="cardName"
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="descr">
            Descricao
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              id="descr"
              name="cardDescription"
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="attr1">
            Forca
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              id="attr1"
              name="cardAttr1"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="attr2">
            Inteligencia
            <input
              data-testid="attr2-input"
              onChange={ onInputChange }
              value={ cardAttr2 }
              type="number"
              id="attr2"
              name="cardAttr2"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="attr3">
            Agilidade
            <input
              data-testid="attr3-input"
              onChange={ onInputChange }
              value={ cardAttr3 }
              type="number"
              id="attr3"
              name="cardAttr3"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="img">
            Imagem
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              id="img"
              name="cardImage"
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="rarities">
            Raridades
            <select
              id="rarities"
              onChange={ onInputChange }
              value={ cardRare }
              name="cardRare"
              data-testid="rare-input"
              required
            >
              {
                rarities.map((rarity, key) => <option key={ key }>{rarity}</option>)
              }
            </select>
          </label>
        </div>
        <label htmlFor="superTrunfo">
          {hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
            : (
              <label htmlFor="trunfo">
                É super trunfo?
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  id="trunfo"
                  name="cardTrunfo"
                />
              </label>
            ) }

        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          id="submit-btn"
          name="isSaveButtonDisabled"
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
  hasTrunfo: PropTypes.bool.isRequired,
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
