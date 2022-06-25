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
    return (

      <form className="Form">
        <h1>Nova Carta</h1>
        <label htmlFor="name">
          <p>Nome: </p>
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="textarea">
          <p>Descrição: </p>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ cardDescription }
          />
        </label>

        <label htmlFor="attr1">
          <p>Atributo 1: </p>
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          <p>Atributo 2: </p>
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          <p>Atributo 3: </p>
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          <p>Imagem do Personagem: </p>
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          <p>Raridade do Personagem: </p>
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {
          !hasTrunfo
            ? (
              <label htmlFor="trunfo">
                <input
                  data-testid="trunfo-input"
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                <p>Super Trunfo</p>
              </label>)
            : <span>SuperTrunfo já está no baralho </span>
        }
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
