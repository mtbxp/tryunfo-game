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
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="descrip">
            Descrição:
            <textarea
              data-testid="description-input"
              name="descrip"
              rows="5"
              cols="20"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr01">
            Attr01:
            <input
              data-testid="attr1-input"
              type="number"
              name="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr02">
            Attr02:
            <input
              data-testid="attr2-input"
              type="number"
              name="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr03">
            Attr03:
            <input
              data-testid="attr3-input"
              type="number"
              name="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="image">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito Raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <button
            data-testid="save-button"
            name="isSaveButtonDisabled"
            type="submit"
            disabled={ isSaveButtonDisabled }
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
