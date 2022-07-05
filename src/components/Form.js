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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              type="text"
              id="card-name"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              type="text-area"
              id="card-description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              id="card-image"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="card-attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="card-attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="card-attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="thumbnail">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Raridade">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="card-rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito-raro</option>
            </select>
          </label>
          { hasTrunfo === false ? (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="trunfo-card"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )
            : <p>Você já tem um Super Trunfo em seu baralho </p> }
          <button
            type="submit"
            data-testid="save-button"
            id="button"
            name="isSaveButtonDisabled"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
