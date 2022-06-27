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
        <b className="Nome">Nome:</b>
        <input
          type="text"
          className="name-input"
          value="cardname"
          onChance={ onInputChange }
          data-testid="name-input"
        />
        <br />
        <b className="Descricao">Descrição:</b>
        <input
          type="textarea"
          className="description-input"
          value="cardDescription"
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <br />
        <br />

        <b className="1Atb">Primeiro Atributo:</b>
        <input
          type="number"
          className="attr1-input"
          value="cardAttr1"
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <br />
        <b className="2Atb">Segundo Atributo:</b>
        <input
          type="number"
          className="attr2-input"
          value="cardAttr2"
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <br />
        <b className="3Atb">Terceiro Atributo:</b>
        <input
          type="number"
          className="attr3-input"
          value="cardAttr3"
          onChange={ onInputChange }
          data-testid="attr3-input"
        />
        <br />
        <br />

        <b className="Imagem">Imagem:</b>
        <input
          type="text"
          className="cardImage"
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <br />
        <br />

        <b>Raridade:</b>
        <select className="rare-input" value="cardRare" onChange={ onInputChange }>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <br />
        <br />

        <input
          type="checkbox"
          className="trunfo-input"
          checked="cardTrunfo"
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        <b>Super Trunfo!</b>
        <br />
        <br />

        <button
          type="button"
          className="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;

// <input type="select" data-testid="rare-input" />
