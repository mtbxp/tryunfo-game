import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';

export default class Form extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(){

  }

  render() {
    const { cardName,
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
      onSaveButtonClick
    } = this.props;

    return (
      <form>
        <label htmlFor="nameInput">
          Card name:
          <input
            data-testid="name-input"
            name="nameInput"
            type="text"
            value={ cardName }
            onChange={ onInputChange } />
        </label>
        <label>
          Description:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <br />
        </label>
        <label>
          Attr 1:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Attr 2:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange } 
          />
        </label>
        <label>
          Attr 3:
          <input 
            type="number" 
            data-testid="attr3-input" 
            value={ cardAttr3 } 
            onChange={ onInputChange }
          />
          <br />
        </label>
        <label>
          Imagem:
          <img value={ cardImage } data-testid="image-input" onChange={ this.onInputChange }>
          </img> 
        </label>
        <label>
          <select type="select" data-testid="rare-input" value={ cardRare }>
            <option value="normal">NORMAL</option>
            <option value="raro">RARO</option>
            <option value="muito-raro">MUITO RARO</option>
          </select>
        </label>
        <label>
          <input type="checkbox" data-testid="trunfo-input" checked={ cardTrunfo } />
        </label>
        <button data-testid="save-button">SALVAR</button>

      </form>

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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
