import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    // mycomment
    
    const
      {
        cardName,
        onInputChange,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        onSaveButtonClick,
      } = this.props;

    return (
      <div>
        <form>
          <Input
            name="nome"
            type="text"
            value={ cardName }
            label="Nome"
            onChange={ onInputChange }
            testid="name-input"
          />
          <label htmlFor="textarea">
            Descrição
            <textarea
              id="textarea"
              name="describe"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <Input
            name="firstAttribute"
            type="number"
            value={ cardAttr1.toString() }
            label="Força"
            testid="attr1-input"
            onChange={ onInputChange }
          />
          <Input
            name="secondAttribute"
            type="number"
            value={ cardAttr2.toString() }
            label="Inteligência"
            onChange={ onInputChange }
            testid="attr2-input"
          />
          <Input
            name="thirdAttribute"
            type="number"
            value={ cardAttr3.toString() }
            label="Destreza"
            onChange={ onInputChange }
            testid="attr3-input"
          />
          <Input
            name="cardImage"
            type="text"
            value={ cardImage }
            label="Carta"
            onChange={ onInputChange }
            testid="image-input"
          />
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option name="normal">normal</option>
            <option name="raro">raro</option>
            <option name="muitoRaro">muito raro</option>
          </select>
          <label htmlFor="superTrunfo">
            Super Trunfo
            <input
              id="superTrunfo"
              name="superTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            type="button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
