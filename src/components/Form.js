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
              name="cardName"
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
              name="cardDescription"
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
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
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
              name="cardImage"
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
              name="cardRare"
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
              name="cardTrunfo"
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
};

export default Form;
