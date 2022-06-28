import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class Form extends React.Component {
  renderCheckBox = (isTrunfo, checked, onChange) => {
    if (!isTrunfo) {
      return (
        <label htmlFor="trunfoCheckInput">
          Super Trunfo?
          <input
            id="trunfoCheckInput"
            checked={ checked }
            name="cardTrunfo"
            onChange={ onChange }
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
      );
    }
    return (<p>Você já tem um Super Trunfo em seu baralho</p>);
  };

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
      <section>
        <form>
          <label htmlFor="cardNameInput">
            Nome:
            <input
              id="cardNameInput"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="cardDescriptionInput">
            Descrição
            <textarea
              id="cardDescriptionInput"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="cardAttr1Input">
            attr1
            <input
              id="cardAttr1Input"
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2Input">
            attr2
            <input
              id="cardAttr2Input"
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3Input">
            attr3
            <input
              id="cardAttr3Input"
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="cardImageInput">
            Image:
            <input
              id="cardImageInput"
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
              type="input"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="cardRareInput">
            Raridade
            <select
              id="cardRareInput"
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          {this.renderCheckBox(hasTrunfo, cardTrunfo, onInputChange)}
        </form>
        <button
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
