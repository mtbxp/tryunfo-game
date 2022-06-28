import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

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
        <form>
          <lebel>
            Nome:
            <input
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
            />
          </lebel>
          <lebel>
            Descrição
            <textarea
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </lebel>
          <lebel>
            attr1
            <input
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </lebel>
          <lebel>
            attr2
            <input
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </lebel>
          <lebel>
            attr3
            <input
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </lebel>
          <lebel>
            Image:
            <input
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
              type="input"
              data-testid="image-input"
            />
          </lebel>
          <lebel>
            Raridade
            <select
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </lebel>
          <lebel>
            Super Trunfo?
            <input
              checked={ cardTrunfo }
              name="cardTrunfo"
              onChange={ onInputChange }
              type="checkbox"
              data-testid="trunfo-input"
            />
          </lebel>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
