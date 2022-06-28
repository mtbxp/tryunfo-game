import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

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

    const trunfoo = (
      <label htmlFor="trunfo-input">
        <input
          id="trunfo-input"
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <form id="form-card">
        <div className="content-div">
          <label htmlFor="card-name">
            Nome
            <input
              data-testid="name-input"
              type="text"
              id="card-name"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="content-div">
          <label htmlFor="cardDescription">
            Description

            <textarea
              data-testid="description-input"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="content-div">
          <label htmlFor="card-attr1">
            Attribute 1:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-attr2">
            Attribute 2:
            <input
              data-testid="attr2-input"
              type="number"
              id="card-attr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-attr3">
            Attribute 3:
            <input
              data-testid="attr3-input"
              type="number"
              id="card-attr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="content-div">
          <label htmlFor="card-image">
            Imagem (URL)
            <input
              type="text"
              id="card-image"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="content-div">
          <label htmlFor="card-rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="card-rarity"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

        </div>

        <div className="content-div">
          {
            (hasTrunfo) ? <p>Você já tem um Super Trunfo em seu baralho</p> : trunfoo
          }
        </div>

        <div className="content-div">
          <button
            data-testid="save-button"
            type="submit"
            id="card-save-button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
