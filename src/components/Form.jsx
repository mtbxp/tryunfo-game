import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, onInputChange,
      isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <form className="form" onSubmit={ this.onSaveButtonClick }>
        <h2>Adicionar uma nova carta</h2>
        <label htmlFor="cardName">
          Name:
          <input
            type="text"
            id="cardName"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription" className="cardDescription">
          Description:
          <textarea
            type="text"
            id="cardDescription"
            name="cardDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <div className="attrs">
          <label htmlFor="cardAttr1">
            Attribute 1:
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Attribute 2:
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Attribute 3:
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <label htmlFor="cardImage">
          Image:
          <input
            id="cardImage"
            name="cardImage"
            data-testid="image-input"
            alt=""
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-rarity" className="cardRarity">
          Rarity:
          <select
            name="cardRare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Epic</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Enviar
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
