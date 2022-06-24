import React from 'react';
import propTypes from 'prop-types';

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
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              type="text"
              name="name"
            />
          </label>
          <br />
          <br />
          <label htmlFor="descrip">
            Descrição:
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              name="descrip"
              rows="5"
              cols="20"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr01">
            Attr01:
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              type="number"
              name="attr01"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr02">
            Attr02:
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              type="number"
              name="attr02"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr03">
            Attr03:
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              type="number"
              name="attr03"
            />
          </label>
          <br />
          <br />
          <label htmlFor="image">
            Imagem:
            <input
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              type="text"
              name="image"
            />
          </label>
          <br />
          <br />
          <label htmlFor="rare">
            Raridade:
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="rare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
              name="trunfo"
            />
          </label>
          <br />
          <br />
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            name="save"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
