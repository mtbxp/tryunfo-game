import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="name-input" value="nome">
          Nome
          <input
            value={ cardName }
            type="text"
            data-testid="name-input"
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            value={ cardDescription }
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="10"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Attr1
          <input
            value={ cardAttr1 }
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Attr2
          <input
            value={ cardAttr2 }
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Attr3
          <input
            value={ cardAttr3 }
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            value={ cardImage }
            type="text"
            name="cardImage"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <select
          value={ cardRare }
          name="cardRare"
          data-testid="rare-input"
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="save-button">
          <input
            disabled={ isSaveButtonDisabled }
            type="submit"
            value="Salvar"
            data-testid="save-button"
            onClick={ onSaveButtonClick }

          />
        </label>
      </form>
    );
  }
}

Forms.propTypes = {
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

export default Forms;
