import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <div className="form-container">
          <label htmlFor="set-card-name">
            Nome
            <input
              type="text"
              name="cardName"
              id="set-card-name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="set-card-description">
            Descrição
            <input
              type="textarea"
              name="cardDescription"
              id="set-card-description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="set-attribute01">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="set-attribute01"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="set-attribute02">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="set-attribute02"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="set-attribute03">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="set-attribute03"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="set-image">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="set-image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="set-rarity">
            Raridade
            <select
              name="cardRare"
              id="set-rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <div>
            { !hasTrunfo
              ? (
                <label htmlFor="super-trunfo">
                  Super Trybe Trunfo
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="set-trunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
              : <p>Você já tem um Super Trunfo em seu baralho</p> }
          </div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
