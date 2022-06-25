import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="card-name">
        <label className="label" htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            className="input"
            id="cardName"
            name="cardName"
            type="text"
          />
        </label>
        <label className="label" htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            className="input"
            id="cardDescription"
            name="cardDescription"
            type="textarea"
          />
        </label>
        <label className="label" htmlFor="cardAttr1">
          Quantidade de Livros Vendidos:
          <input
            data-testid="attr1-input"
            className="input"
            id="cardAttr1"
            name="cardAttr1"
            type="number"
          />
        </label>
        <label className="label" htmlFor="cardAttr2">
          Primeira Publicação:
          <input
            data-testid="attr2-input"
            className="input"
            id="cardAttr2"
            name="cardAttr2"
            type="number"
          />
        </label>
        <label className="label" htmlFor="cardAttr3">
          Quantidade de Páginas:
          <input
            data-testid="attr3-input"
            className="input"
            id="cardAttr3"
            name="cardAttr3"
            type="number"
          />
        </label>
        <label className="label" htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            className="input"
            id="cardImage"
            name="cardImage"
            type="text"
          />
        </label>
        <label className="label" htmlFor="cardRare">
          Raridade:
          <select
            data-testid="rare-input"
            className="input"
            id="cardRare"
            name="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label className="label-super" htmlFor="cardSuper">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            className="input"
            id="cardSuper"
            name="cardSuper"
            type="checkbox"
          />
        </label>
        <button
          data-testid="save-button"
          className="button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
