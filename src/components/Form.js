import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };
  // }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="card">
            Nome:
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="card"
              type="text"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="description"
              type="textarea"
            />
          </label>

          <label htmlFor="value-card-1">
            Atributo 1:
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="value-card-1"
              type="number"
            />
          </label>

          <label htmlFor="value-card-2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="value-card-2"
              type="number"
            />
          </label>

          <label htmlFor="value-card-3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="value-card-3"
              type="number"
            />
          </label>

          <label htmlFor="url-image">
            Imagem:
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="url-image"
              type="text"
            />
          </label>

          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="card"
              type="select"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="super-trunfo">
            Super Trunfo?
            <input
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="super-trunfo"
              type="checkbox"
            />
          </label>

          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
