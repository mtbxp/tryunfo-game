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
      <>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            placeholder="Escreva o nome da carta"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            placeholder="Escolha a raridade"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          {
            hasTrunfo === 't' ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
            />
          }
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="isSaveButtonDisabled"
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
};

export default Form;
