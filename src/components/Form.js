import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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

    const showInput = () => (
      <div className="divInputSp">
        <p>Adicione um super trunfo</p>
        <input
          id="sp"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          name="cardTrunfo"
          onChange={ onInputChange }
        />
      </div>
    );

    return (
      <form className="containerForm">
        <label htmlFor="cardName">
          <input
            className="inputNome"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="descricao">
          <textarea
            className="inputdescricao"
            id="descricao"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
            placeholder="Descrição"
            required
          />
        </label>
        <label htmlFor="primeiroAtributo">
          <input
            className="atributos"
            id="primeiroAtributo"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            min="0"
            max="90"
            name="cardAttr1"
            onChange={ onInputChange }
            placeholder="Atributo 1"
            required
          />
        </label>
        <label htmlFor="segundoAtributo">
          <input
            className="atributos"
            id="segundoAtributo"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            min="0"
            max="90"
            onChange={ onInputChange }
            placeholder="Atributo 2"
            required
          />
        </label>
        <label htmlFor="terceiroAtributo">
          <input
            className="atributos"
            id="terceiroAtributo"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            min="0"
            max="90"
            onChange={ onInputChange }
            placeholder="Atributo 3"
            required
          />
        </label>
        <label htmlFor="urlImg">
          <input
            className="inputImg"
            id="urlImg"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="raridadeCard">
          <select
            id="raridadeCard"
            data-testid="rare-input"
            value={ cardRare === '' ? 'normal' : cardRare }
            name="cardRare"
            onChange={ onInputChange }
            required
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="sp">
          {hasTrunfo === 'true'
            ? <p>Você já tem um Super Trunfo em seu baralho</p> : showInput()}

        </label>
        <button
          disabled={ isSaveButtonDisabled }
          type="button"
          data-testid="save-button"
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
  hasTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: null,
  cardDescription: null,
  cardAttr1: null,
  cardAttr2: null,
  cardAttr3: null,
  cardImage: null,
  cardRare: null,
  cardTrunfo: null,
  hasTrunfo: null,
  isSaveButtonDisabled: null,
  onInputChange: null,
  onSaveButtonClick: null,
};
export default Form;
