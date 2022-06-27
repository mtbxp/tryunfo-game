import React, { Component } from 'react';
import '../index.css';

class Form extends Component {
  render() {
    return (
      <main>
        <form>
          <label htmlFor="addCard">
            Adicionar nova carta
            <p>Nome</p>
            <input
              data-testid="name-input"
              type="text"
              id="addCard"
              placeholder="Placeholder"
              name="name-input"
            />
          </label>

          <label htmlFor="describe">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
              id="describe"
              name="description-input"
            />
          </label>

          <label htmlFor="number1">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1-input"
              id="number1"
            />
          </label>

          <label htmlFor="number2">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2-input"
              id="number2"
            />
          </label>

          <label htmlFor="number3">
            Attr02
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3-input"
              id="number3"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="imagem-card"
              id="image"
            />
          </label>

          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              name="rarity-card"
              placeholder="Placeholder"
              id="rarity"
            >
              <option
                value="normal"
              >
                normal
              </option>
              <option
                value="raro"
              >
                raro
              </option>
              <option
                value="muito raro"
              >
                muito raro
              </option>
            </select>
          </label>

          <label
            className="checkbox"
            htmlFor="checkbox"
          >
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="checkbox-trunfo"
              id="checkbox"
            />
            Super Trybe Trunfo
          </label>

          <button type="submit" data-testid="save-button">Entrar</button>
        </form>
      </main>
    );
  }
}

export default Form;
