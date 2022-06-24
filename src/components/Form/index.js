import React, { Component } from 'react';

class Form extends Component {
  render() {
    const rarities = ['normal', 'raro', 'muito raro'];

    return (
      <form>
        <label htmlFor="input__name">
          <span className="input__label">Nome</span>
          <input id="input__name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="input__description">
          <span className="input__label">Descrição</span>
          <textarea id="input__description" type="text" data-testid="description-input" />
        </label>
        <label htmlFor="input__attr1">
          <span className="input__label">Ninjutsu</span>
          <input id="input__attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="input__attr2">
          <span className="input__label">Genjutsu</span>
          <input id="input__attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="input__attr3">
          <span className="input__label">Taijutsu</span>
          <input id="input__attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="input__image">
          <span className="input__label">Imagem</span>
          <input id="input__image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="input__select">
          <span className="input__label">Raridade</span>
          <select id="input__select" value={ rarities[0] } data-testid="rare-input">
            {rarities.map((rarity) => (
              <option key={ rarity } value={ rarity }>{rarity}</option>
            ))}
          </select>
        </label>
        <label htmlFor="input__trunfo">
          <span className="input__label">Super Trybe Trunfo</span>
          <input id="input__trunfo" type="text" data-testid="trunfo-input" />
        </label>
        <button id="submit__trunfo" type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
