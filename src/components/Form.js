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
        <h2>Adicionar Nova Carta</h2>
        <form>

          <label htmlFor="name-input">
            Name:
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              id="name-input"
              placeholder="Name"
            />
          </label>
          <br />

          <label htmlFor="description-input">
            Description:
            <input
              name="cardDescription"
              data-testid="description-input"
              type="text"
              value={ cardDescription }
              onChange={ onInputChange }
              id="description-input"
              placeholder="Description"
            />
          </label>
          <br />

          <label htmlFor="attr1-input">
            Attr01:
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="attr1-input"
            />
          </label>
          <br />

          <label htmlFor="attr2-input">
            Attr02:
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="attr2-input"
            />
          </label>
          <br />

          <label htmlFor="attr3-input">
            Attr03:
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="attr3-input"
            />
          </label>
          <br />

          <label htmlFor="image">
            Imagem:
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              id="image"
            />
          </label>
          <br />

          <label htmlFor="rare-input">
            Raridade:
            <select
              name="cardRare"
              data-testid="rare-input"
              type="select"
              value={ cardRare }
              onChange={ onInputChange }
              id="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />

          <label htmlFor="trunfo-input">
            <input
              name="cardTrunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
          <br />

          <button
            data-testid="save-button"
            type="button"
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
