import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    // this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {

    };
  }

  handleClick() {
    this.setState(() => ({

    }));
  }

  render() {
    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name=""
            id="input-name"
          />
        </label>
        Descrição
        <label htmlFor="input-description">
          <textarea
            data-testid="description-input"
            name=""
            id="input-description"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="input-attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name=""
            id="input-attr01"
          />
        </label>
        <label htmlFor="input-attr02">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name=""
            id="input-attr02"
          />
        </label>
        <label htmlFor="input-attr03">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name=""
            id="input-attr03"
          />
        </label>
        <label htmlFor="input-img">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name=""
            id="input-img"
          />
        </label>
        <label htmlFor="input-rare">
          Raridade
          <select
            data-testid="rare-input"
            id="input-rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="input-trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name=""
            id="input-trufo"
          />
          Super Trybe Trunfo
        </label>
        <button
          data-testid="save-button"
          type="button"
          id="input-save"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
