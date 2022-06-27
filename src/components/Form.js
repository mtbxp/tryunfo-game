import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.setState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target.type === 'checkbox' ? target.checked : target.value;

    this.setState = {
      [name]: value,
    };
  }

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
      /*  hasTrunfo, */
      isSaveButtonDisabled,
      /* onSaveButtonClick, */
    } = this.props;

    const { onInputChange } = this.handleChange;

    return (
      <div className="Form">
        <label htmlFor="name__card">
          Gaga Name:
          <input
            data-testid="name-input"
            name="name__card"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1__input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            name="attr1__input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2__input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            name="attr2__input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3__input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            name="attr3__input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image__input">
          <input
            data-testid="image-input"
            name="image__card"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <div>
          The Fame:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Monster</option>
            <option value="raro">G.U.Y</option>
            <option value="muito raro">Venus</option>
          </select>
        </div>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
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
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};
export default Form;
