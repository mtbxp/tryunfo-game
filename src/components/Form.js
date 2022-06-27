import React, { Component } from 'react';
import '../index.css';

class Form extends Component {
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
      onSaveButtonClick } = this.props;
    return (
      <form className="form">

        <label>
          Name:
          <input type="text" data-testid="name-input" />
        </label>

        <label>
          Description
          <textarea name="Nome" data-testid="description-input" />
        </label>

        <label>
          Força:
          <input type="number" data-testid="attr1-input" />
        </label>

        <label>
          Velocidade:
          <input type="number" data-testid="attr2-input" />
        </label>

        <label>
          seila:
          <input type="number" data-testid="attr3-input" />
        </label>

        <label>
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>

        <label>
          Raridade:
          <select data-testid="rare-input">
            <options>normal</options>
            <options>raro</options>
            <options>muito raro</options>
          </select>
        </label>

        <label>
          Esta carta é um super trunfo?
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <label>
          <button type="submit" data-testid="save-button"> Salvar </button>
        </label>
      </form>
    );
  }
}

export default Form;
