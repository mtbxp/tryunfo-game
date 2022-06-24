/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { onInputChange } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick,
    } = this.props;

    return (
      <form className="texto">
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr3
          {' '}
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            htmlFor="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          {' '}
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          {' '}
          <select
            data-testid="rare-input"
            value={ cardRare }
            id="rare-input"
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="save-button">
          <input
            type="button"
            data-testid="save-button"
            id="save-button"
            value="Salvar"
            name="salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}
Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.number.isRequired,
};
export default Form;
