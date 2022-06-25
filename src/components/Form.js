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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="card-name">
        <label className="label" htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            className="input"
            id="cardName"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            className="input"
            id="cardDescription"
            name="cardDescription"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardAttr1">
          Quantidade de Livros Vendidos:
          <input
            data-testid="attr1-input"
            className="input"
            id="cardAttr1"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardAttr2">
          Primeira Publicação:
          <input
            data-testid="attr2-input"
            className="input"
            id="cardAttr2"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardAttr3">
          Quantidade de Páginas:
          <input
            data-testid="attr3-input"
            className="input"
            id="cardAttr3"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            className="input"
            id="cardImage"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="label" htmlFor="cardRare">
          Raridade:
          <select
            data-testid="rare-input"
            className="input"
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label className="label-trunfo" htmlFor="cardTrunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            className="input"
            id="cardTrunfo"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          className="button"
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
