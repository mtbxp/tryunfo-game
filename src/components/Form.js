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
      <div>
        <h1>Adicionar Nova Carta</h1>
        <form>

          <label htmlFor="name-input">Name</label>
          <br />

          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
          />
          <br />

          <label htmlFor="description-input">Description</label>
          <br />

          <input
            data-testid="description-input"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description-input"
          />
          <br />

          <label htmlFor="attr1-input">Attr01</label>
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1-input"
          />
          <br />

          <label htmlFor="attr2-input">Attr02</label>
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2-input"
          />
          <br />

          <label htmlFor="att3-input">Attr03</label>
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3-input"
          />
          <br />

          <label htmlFor="image-input">Imagem</label>
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            id="image-input"
          />
          <br />

          <label htmlFor="rare-input">Raridade</label>
          <select
            data-testid="rare-input"
            type="select"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <br />

          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo-input"
          />
          <label htmlFor="trunfo-input">Super Trybe Trunfo</label>
          <br />

          <input
            data-testid="save-button"
            type="button"
            value="Save"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
