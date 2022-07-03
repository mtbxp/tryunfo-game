import PropTypes from 'prop-types';
import React from 'react';

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
      <section className="container-section">

        <h1 className="adicionarCarta">Adicionar Nova Carta</h1>

        <form>
          Nome:
          <label htmlFor="name-input">
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          Imagem:
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="cardImage"
              width={ 100 }
              height={ 40 }
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          Descrição:
          <label htmlFor="description-input">
            <input
              data-testid="description-input"
              type="text"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          Atributo 1:
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          Atributo 2:
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id='"cardAttr2"'
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          Atributo 3:
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          Raridade:
          <label htmlFor="rare-imput">
            <select
              name="cardRare"
              data-testid="rare-input"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> Normal</option>
              <option value="raro"> Raro</option>
              <option value="muito raro"> Muito Raro</option>
            </select>
          </label>

          <div className="super-trunfo">
            { hasTrunfo ? <h4>Você já tem um Super Trunfo em seu baralho</h4>
              : (
                <label htmlFor="trunfo-input">
                  Super Trunfo
                  <input
                    name="cardTrunfo"
                    id="cardTrunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )}
          </div>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
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
