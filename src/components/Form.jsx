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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>

        <Input
          text="Nome"
          name="cardName"
          type="text"
          value={ cardName }
          dataTestId="name-input"
          onChange={ onInputChange }
        />

        <Input
          text="Descrição"
          name="cardDescription"
          type="textarea"
          value={ cardDescription }
          dataTestId="description-input"
          onChange={ onInputChange }
        />

        <Input
          text="Attr1"
          name="Attr01"
          type="number"
          value={ cardAttr1 }
          dataTestId="attr1-input"
          onChange={ onInputChange }
        />

        <Input
          text="Attr02"
          name="Attr02"
          type="number"
          value={ cardAttr2 }
          dataTestId="attr2-input"
          onChange={ onInputChange }
        />

        <Input
          text="Attr03"
          name="Attr03"
          type="number"
          value={ cardAttr3 }
          dataTestId="attr3-input"
          onChange={ onInputChange }
        />

        <Input
          text="Imagem"
          name="Imagem"
          type="text"
          value={ cardImage }
          dataTestId="image-input"
          onChange={ onInputChange }
        />

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito</option>
          </select>
        </label>

        <Input
          type="checkbox"
          text="Super Trybe Trunfo"
          name="checkbox"
          dataTestId="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
