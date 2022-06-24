import React from 'react';
import './Form.css';
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
      <form>
        <input
          data-testid="name-input"
          type="text"
          name=""
          id=""
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <input
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
          type="number"
          name=""
          id=""
        />
        <input
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
          type="number"
          name=""
          id=""
        />

        <input
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
          type="number"
          name=""
          id=""
        />
        <input
          data-testid="image-input"
          type="text"
          name=""
          id=""
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          name=""
          id=""
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div>
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name=""
            id=""
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <span>A carta será um Trunfo?</span>
        </div>
        <input
          data-testid="save-button"
          type="submit"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
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
  cardImage: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo:,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
