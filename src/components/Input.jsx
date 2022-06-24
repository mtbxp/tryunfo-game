import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <h2> Adicionar nova carta </h2>
        <form className="form">
          <label htmlFor="cardName">
            Nome
            <input type="text" data-testid="name-input" id="cardName" />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
            />
          </label>

          <label htmlFor="firstAttribute">
            Primeiro atributo
            <input
              type="number"
              data-testid="attr1-input"
              id="firstAttribute"
            />
          </label>

          <label htmlFor="secondAttribute">
            Segundo atributo
            <input
              type="number"
              data-testid="attr2-input"
              id="secondAttribute"
            />
          </label>

          <label htmlFor="thirdAttribute">
            Terceiro atributo
            <input
              type="number"
              data-testid="attr3-input"
              id="thirdAttribute"
            />
          </label>

          <label htmlFor="cardPath">
            Imagem
            <input type="text" data-testid="image-input" id="cardPath" />
          </label>

          <label htmlFor="cardRarity">
            Raridade
            <select name="rarity" id="cardRarity" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="superCard">
            Super Trybe Trunfo
            <input type="checkbox" id="superCard" data-testid="trunfo-input" />
          </label>

          <button type="submit" id="saveButton" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
