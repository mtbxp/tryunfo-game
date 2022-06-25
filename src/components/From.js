import React from 'react';
import '../index.css';

class From extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="contanerNewLetter">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="name-input">
          <input
            type="text"
            data-testid="name-input"
            name="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          <input
            type="textarea"
            name="description-input"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          <input
            type="number"
            name="attr1-input"
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          <input
            type="number"
            name="attr2-input"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          <input
            type="number"
            name="attr3-input"
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          <input
            type="text"
            name="image-input"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <div>
          <select
            data-testid="rare-input"
            name="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>

        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          name="save-button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default From;
