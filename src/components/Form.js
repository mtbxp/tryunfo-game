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
      <section>

        <h2>Adicione uma nova carta</h2>

        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="nameInput"
            name="nameInput"
            placeholder="Insira o nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="descriptionInput"
            name="descriptionInput"
            placeholder="Adicione uma descrição"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1Input">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1Input"
            name="attr1Input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2Input">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2Input"
            name="attr2Input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3Input">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3Input"
            name="attr3Input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageInput">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="imageInput"
            name="imageInput"
            placeholder="Insira o endereço da imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rareInput">
          Raridade
          <select
            data-testid="rare-input"
            id="rareInput"
            name="rareInput"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoInput">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfoInput"
            name="trunfoInput"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
