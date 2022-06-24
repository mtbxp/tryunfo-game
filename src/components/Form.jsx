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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="text">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="text"
            name="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição Carta:
          <textarea
            id="descricao"
            name="descricao"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="speed">
          Speed:
          <input
            type="number"
            data-testid="attr1-input"
            id="speed"
            name="speed"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="skill">
          Skill:
          <input
            type="number"
            data-testid="attr2-input"
            id="skill"
            name="skill"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="power">
          Power:
          <input
            type="number"
            data-testid="attr3-input"
            id="power"
            name="power"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="image"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="check">
          Carta Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="check"
            name="check"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          desabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
