import React from 'react';
import propTypes, { bool } from 'prop-types';

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
            name="save"
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
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
