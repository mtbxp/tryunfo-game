import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.Formulario = this.Formulario.bind(this);
  }

  render() {
    return (
      <div>
        <h1><b>Adicionar nova Carta</b></h1>
        <br />
        <br />
        <b>Nome:</b>
        <input type="text" data-testid="name-input" />
        <br />
        <b>Descrição:</b>
        <input type="textarea" data-testid="description-input" />
        <br />
        <br />

        <b>Primeiro Atributo:</b>
        <input type="number" data-testid="attr1-input" />
        <br />
        <b>Segundo Atributo:</b>
        <input type="number" data-testid="attr2-input" />
        <br />
        <b>Terceiro Atributo:</b>
        <input type="number" data-testid="attr3-input" />
        <br />
        <br />

        <b>Imagem:</b>
        <input type="text" data-testid="image-input" />
        <br />
        <br />

        <b>Raridade:</b>
        <select>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <br />
        <br />

        <input type="checkbox" data-testid="trunfo-input" />
        <b>Super Trunfo!</b>
        <br />
        <br />

        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;

// <input type="select" data-testid="rare-input" />
