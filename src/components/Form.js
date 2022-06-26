import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick, onInputChange } = this.props;
    return (
      <form>
        <div>
          Nome:
          <input
            name="cardName"
            value={ cardName }
            data-testid="name-input"
            type="text"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Descrição
          <textarea
            name="cardDescription"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Atributo 1
          <input
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Atributo 2
          <input
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Atributo 3
          <input
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </div>
        <div>
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        <div>
          <input
            name="cardTrunfo"
            data-testid="trunfo-input"
            id="super-trunfo"
            type="checkbox"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
          Super Trunfo
        </div>
        <button
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
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
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
