import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
      <form>
        <h2>Adicionar nova carta</h2>

        <Input
          name="card-name"
          type="text"
          text="Nome"
          value={ cardName }
          onChange={ onInputChange }
          dataTestId="name-input"
        />

        <label htmlFor="card-description">
          Descrição
          <textarea
            name="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>

        <Input
          name="card-attr1"
          type="number"
          text="Atributo 1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          dataTestId="attr1-input"
        />
        <Input
          name="card-attr2"
          type="number"
          text="Atributo 2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          dataTestId="attr2-input"
        />
        <Input
          name="card-attr3"
          type="number"
          text="Atributo 3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          dataTestId="attr3-input"
        />

        <Input
          name="card-image"
          type="text"
          text="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
          dataTestId="image-input"
        />

        <label htmlFor="card-rarity">
          Raridade
          <select
            name="card-rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <Input
          name="card-trunfo-check"
          type="checkbox"
          text="Super Trunfo?"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          dataTestId="trunfo-input"
        />

        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
