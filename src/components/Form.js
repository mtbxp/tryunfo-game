import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  // handleStates = ({target}) => {
  //     const { name, value } = target;
  //     this.setState({
  //         [name]: value,
  //     })
  // }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome da Carta:
          <input
            id="name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição da Carta:
          <textarea
            id="descricao"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            id="atributo1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            id="atributo2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            id="atributo3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input
            id="imagem"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="selecionar">
          Raridade
          <select
            id="selecionar"
            data-testid="rare-input"
          >
            <option>
              normal
            </option>
            <option>
              raro
            </option>
            <option>
              muito raro
            </option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Trybe Trunfo:
          <input
            id="checkbox"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          id="button"
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
