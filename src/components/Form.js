import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
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
      <div>
        <form className="form">
          <label htmlFor="cardName">
            <span> Nome: </span>
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Insira o nome da carta"
            />
          </label>

          <label htmlFor="inputDescription">
            <span> Descrição: </span>
            <input
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Breve descrição sobre a carta"
            />
          </label>

          <label htmlFor="inputAttr1">
            <span> Atributo 1: </span>
            <input
              min="1"
              max="90"
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              placeholder="Valor"
            />
          </label>

          <label htmlFor="inputAttr2">
            <span> Atributo 2: </span>
            <input
              min="1"
              max="90"
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              placeholder="Valor"

            />
          </label>

          <label htmlFor="inputAttr3">
            <span> Atributo 3: </span>
            <input
              min="1"
              max="90"
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              placeholder="Valor"
            />
          </label>

          <label htmlFor="inputImg">
            <span> Imagem: </span>
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              placeholder="Link da imagem"
            />
          </label>

          <label htmlFor="inputRarity">
            Raridade:
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor={ hasTrunfo }>
            Super Trunfo
            <input
              name="cardTrunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            name="isSaveButtonDisabled"
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
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
