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
      <div>
        <form>
          <lebel>
            Nome:
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
            />
          </lebel>
          <lebel>
            Descrição
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </lebel>
          <lebel>
            attr1
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </lebel>
          <lebel>
            attr2
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </lebel>
          <lebel>
            attr3
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </lebel>
          <lebel>
            Image:
            <input
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </lebel>
          <lebel>
            Raridade
            <select
              value={ cardRare }
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
      </div>
    );
  }
}

export default Form;
