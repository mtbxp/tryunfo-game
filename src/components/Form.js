import PropTypes from 'prop-types';
import React from 'react';
import '../styles/form.css';
import validateForm from './validateForm';

class Form extends React.Component {
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { addNewCard, getErrors, cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare } = this.props;

    const returnedErrors = validateForm(cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare);

    if (Object.keys(returnedErrors).length === 0) {
      addNewCard();
    } else {
      getErrors(returnedErrors);
    }
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, errors,
    } = this.props;

    return (
      <form className="form" onSubmit={ this.onSaveButtonClick }>
        <h2>Card Info</h2>
        {/* ------------- NAME -------------- */}
        <label htmlFor="Name" className="label">
          Nome
          <br />
          <input
            type="text"
            className="input"
            name="cardName"
            id="Name"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <span className="error">{ errors.name }</span>

        {/* ------------- DESCRIPTION -------------- */}
        <label htmlFor="description" className="label">
          Descrição
          <br />
          <textarea
            className="input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <span className="error">{ errors.description }</span>
        <div className="attrs">
          {/* ------------- ATTR1 -------------- */}
          <label htmlFor="attr1" className="label">
            Cool
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          {/* ------------- ATTR2 -------------- */}
          <label htmlFor="attr2" className="label">
            Fannie
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr2"
              id="attr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          {/* ------------- ATTR3 -------------- */}
          <label htmlFor="attr3" className="label">
            Smart
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr3"
              id="attr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          { errors.attr1 ? <span className="error">{ errors.attr1 }</span> : undefined }
          { errors.attr2 ? <span className="error">{ errors.attr2 }</span> : undefined }
          { errors.attr3 ? <span className="error">{ errors.attr3 }</span> : undefined }
        </div>
        {/* ------------- IMAGE -------------- */}
        <label htmlFor="image" className="label">
          Imagem
          <br />
          <input
            type="text"
            className="input"
            name="cardImage"
            id="image"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <span className="error">{ errors.image }</span>

        {/* ------------- RARE -------------- */}
        <label htmlFor="rare" className="label">
          Raro
          <br />
          <select
            name="cardRare"
            id="rare"
            className="input"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <span className="error">{ errors.rare }</span>

        {/* ------------- TRUNFO -------------- */}
        <label htmlFor="trunfo" className="label">
          <input
            name="cardTrunfo"
            id="trunfo"
            type="checkbox"
            selected={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
          Trunfo
        </label>

        {/* ------------- BUTTON SALVAR -------------- */}
        <button
          type="submit"
          className="btn"
          name="salvar"
          id="salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addNewCard: PropTypes.func.isRequired,
  getErrors: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attr1: PropTypes.number.isRequired,
    attr2: PropTypes.number.isRequired,
    attr3: PropTypes.number.isRequired,
    rare: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
