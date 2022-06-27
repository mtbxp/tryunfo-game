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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <label htmlFor="card-name" className="card-name">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="card-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-description" className="card-description">
          Descrição da carta
          <textarea
            data-testid="description-input"
            name="card-description"
            id="description-box"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="first-attribute" className="form-child">
          Primeiro atributo
          <input
            data-testid="attr1-input"
            type="number"
            name="first-attribute"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="second-attribute" className="form-child">
          Segundo atributo
          <input
            data-testid="attr2-input"
            type="number"
            name="second-attribute"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="second-attribute" className="form-child">
          Terceiro atributo
          <input
            data-testid="attr3-input"
            type="number"
            name="third-attribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image" className="form-child">
          Imagem da carta
          <input
            data-testid="image-input"
            type="text"
            name="card-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-rare" className="form-child">
          Nível de raridade
          <select
            data-testid="rare-input"
            name="card-rare"
            id="selection-box"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="form-checkbox" className="form-child">
          A carta é uma Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="form-checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          id="submit-button"
          type="submit"
          className="form-child"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Adicionar carta
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
