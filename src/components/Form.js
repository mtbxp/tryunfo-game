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

    const sP = (
      <label htmlFor="cardTrunfo">
        Super Trunfo
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          className="superTrun"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    return (
      <form className="form">
        <div className="cardInfo">
          <label htmlFor="cardName">
            Nome:
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              maxLength="100"
              placeholder={ isSaveButtonDisabled ? 'Preencha esse campo' : '' }
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem:
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              placeholder={ isSaveButtonDisabled ? 'Preencha esse campo' : '' }
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <textarea
          name="cardDescription"
          cols="30"
          rows="10"
          placeholder="Escreva a descrição aqui"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="cardStatus">
          <div className="cardAttr">
            <label htmlFor="cardAttr1">
              Força:
              <input
                type="number"
                name="cardAttr1"
                data-testid="attr1-input"
                max="90"
                min="0"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="cardAttr2">
              Inteligência:
              <input
                type="number"
                name="cardAttr2"
                data-testid="attr2-input"
                max="90"
                min="0"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="cardAttr3">
              Velocidade:
              <input
                type="number"
                name="cardAttr3"
                data-testid="attr3-input"
                max="90"
                min="0"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <section className="cardSpecials">
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
            <aside>
              {
                hasTrunfo ? <p id="tr">Você já tem um Super Trunfo em seu baralho</p> : sP
              }
            </aside>
          </section>
        </div>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar Carta
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
