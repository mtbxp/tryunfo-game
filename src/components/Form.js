import React from 'react';
import PropType from 'prop-types';

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
        <fieldset>
          <label htmlFor="nome">
            Nome
            <input
              data-testid="name-input"
              name="cardName"
              id="nome"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
            />
          </label>

          <label htmlFor="descricao">
            Descrição
            <textarea
              type="textarea"
              name="cardDescription"
              id="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr01">
            Attr01
            <input
              min={ 0 }
              max={ 90 }
              name="cardAttr1"
              id="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input
              min={ 0 }
              max={ 90 }
              name="cardAttr2"
              id="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr03">
            Attr03
            <input
              min={ 0 }
              max={ 90 }
              name="cardAttr3"
              id="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="imagem">
            Imagem
            <input
              name="cardImage"
              id="imagem"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </label>

          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

          { hasTrunfo ? ('Você já tem um Super Trunfo em seu baralho') : (
            <label htmlFor="check-trunfo">
              Super Tryunfo
              <input
                name="card-trunfo"
                id="check-trunfo"
                data-testid="trunfo-input"
                onChange={ onInputChange }
                type="checkbox"
                checked={ cardTrunfo }
              />
            </label>
          )}

          <button
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </fieldset>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
