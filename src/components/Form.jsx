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
      <form>
        <label htmlFor="name">
          Nome:
          <br />
          <input
            type="text"
            name="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <br />
          <textarea
            name="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="attr1">
          attr1
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="attr2">
          attr2
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="attr3">
          attr3
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="image">
          Imagem:
          <br />
          <input
            type="text"
            name="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ () => onInputChange() }
          />
          <br />
        </label>
        <br />
        <label htmlFor="rare">
          <select
            name="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ () => onInputChange() }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          <br />
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ () => onInputChange() }
          />
          Super Trybe Trunfo
          <br />
        </label>
        <br />
        <button
          type="button"
          name="salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick() }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
