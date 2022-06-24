import React from 'react';

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
      <form>
        <div className="container">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Agua:
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Fogo:
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Vento:
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div className="container">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="container">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </div>
        <button
          type="submit"
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

export default Form;
