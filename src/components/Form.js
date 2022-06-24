import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <h1>Adicionar nova carta</h1>
        <label htmlFor="name">
          Nome
          <input className="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input className="describe" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input className="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input className="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input className="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          URL Imagem
          <input className="image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          Raridade
          <select className="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          Super Trybe Trunfo
          <input className="check" type="checkbox" data-testid="trunfo-input" />
        </label>
        <div>
          <button className="bt" type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;
