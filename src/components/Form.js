import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardDescription,
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
    return (
      <form>
        <label htmlFor="name-input">
          Nome da Carta
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="cardDescription"
          />
        </label>
        <section className="atributos-section">
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
            />
          </label>
        </section>
        <label htmlFor="image-input">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input" className="thunfo-check">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
          />
          Super Trybe Trunfo
        </label>
        <br />
        <button
          name="isSaveButtonDisabled"
          value={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
