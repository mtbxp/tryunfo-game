import React from 'react';
import '../Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, onInputChange,
      cardDescription, cardAttr1,
      cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <form className="form">
        <h3 className="margem">Crie sua carta!</h3>
        <div className="teste">
          <p className="margem">Nome da Carta:</p>
          <label htmlFor="nomeDaCarta">
            <input
              data-testid="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              className="infCarta"
              maxLength="30"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Descrção:</p>
          <label htmlFor="descricao">
            <textarea
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              className="infCarta1"
              maxLength="90"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Velocidade:</p>
          <label htmlFor="primeiroAtributo">
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="attrs"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Força:</p>
          <label htmlFor="segundoAtributo">
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="attrs"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Resistencia:</p>
          <label htmlFor="terceiroAtributo">
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="attrs"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Url da Imagem:</p>
          <label htmlFor="img">
            <input
              data-testid="image-input"
              name="cardImage"
              type="string"
              value={ cardImage }
              onChange={ onInputChange }
              className="infCarta"
            />
          </label>
        </div>

        <div className="teste">
          <p className="margem">Raridade da Carta:</p>
          <label htmlFor="raridade">
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              className="raridade"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>

        <label htmlFor="superTrunfo" className="margem">
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
          Super Trunfo
        </label>

        <div className="divBotao">
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="botao"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Form;
