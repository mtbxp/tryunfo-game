import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar Nova Carta</h2>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="text"
            id="name-input"
            data-testid="name-input"
            placeholder="Nome da Carta"
          />
        </label>
        <br />
        <label htmlFor="description-input">
          Descrição
          <textarea
            type="textarea"
            name="textarea"
            id="description-input"
            data-testid="description-input"
            placeholder="Descrição da Carta"
          />
        </label>
        <br />
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            name="attr1"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            name="attr2"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            name="attr3"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="image"
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="raridade-input">
          Raridade
          <select name="raridade" id="raridade-input" placeholder="Selecione a raridade">
            <option id="normal" value="normal">Normal</option>
            <option id="raro" value="raro">Raro</option>
            <option id="muito-raro" value="muito-raro">Muito Raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <br />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
