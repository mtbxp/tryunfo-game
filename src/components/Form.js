import React from 'react';
import '../Css/Form.css';
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <form className="form">
          <label>
            Nome
            <input
              value={ cardName }
              onChange={ onInputChange }
              className="input"
              type="text"
              data-testid="name-input"
            />
          </label>
          <label>
            Descrição
            <input
              value={ cardDescription }
              onChange={ onInputChange }
              className="input"
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <label>
            Atributo 1
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label>
            Atributo 2
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label>
            Atributo 3
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label>
            Link da Imagem
            <input
              value={ cardImage }
              onChange={ onInputChange }
              className="input"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label>
            Insira o nivel de raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              className="input"
              data-testid="rare-input"
              placeholder="Raridade"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label>
            Criar como Super Trunfo?
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              className="input"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            id="save-button"
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </fieldset>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
