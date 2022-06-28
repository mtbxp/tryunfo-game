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
          <label htmlFor="input-name">
            Nome
            <input
              id="input-name"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              className="input"
              type="text"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input
              id="input-description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              className="input"
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="input-attr1">
            Atributo 1
            <input
              id="input-attr1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="input-attr2">
            Atributo 2
            <input
              id="input-attr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="input-attr3">
            Atributo 3
            <input
              id="input-attr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="input"
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="input-image">
            Link da Imagem
            <input
              id="input-image"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              className="input"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="input-select">
            Insira o nivel de raridade
            <select
              id="input-select"
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
          {hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="input-trunfo">
                Criar como Super Trunfo?
                <input
                  id="input-trunfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="input"
                  type="checkbox"
                  data-testid="trunfo-input"
                />
              </label>)}
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
