import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      isSaveButtonDisabled,
      cardTrunfo,
    } = this.props;

    return (
      <form>
        <Input
          describeLabel="Nome"
          testid="name-input"
          type="text"
          name="name"
          value={ cardName }
          change={ onInputChange }
        />

        <textarea
          data-testid="description-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          describeLabel="Attr01"
          testid="attr1-input"
          type="number"
          name="attr1"
          value={ cardAttr1 }
          change={ onInputChange }
        />

        <Input
          describeLabel="Attr02"
          testid="attr2-input"
          type="number"
          name="attr2"
          value={ cardAttr2 }
          change={ onInputChange }
        />

        <Input
          describeLabel="Attr03"
          testid="attr3-input"
          type="number"
          name="attr3"
          value={ cardAttr3 }
          change={ onInputChange }
        />

        <Input
          describeLabel="Imagem"
          testid="image-input"
          type="text"
          name="image"
          value={ cardImage }
          change={ onInputChange }
        />

        <select
          data-testid="rare-input"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <Input
          describeLabel="Super Trunfo"
          testid="trunfo-input"
          type="checkbox"
          name="trunfo"
          checked={ cardTrunfo }
          change={ onInputChange }
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Form;
