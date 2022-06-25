import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>

        <h2>Adicione uma nova carta</h2>

        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="nameInput"
            name="nameInput"
            placeholder="Insira o nome da carta"
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="descriptionInput"
            name="descriptionInput"
            placeholder="Adicione uma descrição"
          />
        </label>

        <label htmlFor="attr1Input">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1Input"
            name="attr1Input"
          />
        </label>

        <label htmlFor="attr2Input">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2Input"
            name="attr2Input"
          />
        </label>

        <label htmlFor="attr3Input">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3Input"
            name="attr3Input"
          />
        </label>

        <label htmlFor="imageInput">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="imageInput"
            name="imageInput"
            placeholder="Insira o endereço da imagem"
          />
        </label>

        <label htmlFor="rareInput">
          Raridade
          <select
            data-testid="rare-input"
            id="rareInput"
            name="rareInput"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoInput">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfoInput"
            name="trunfoInput"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </section>
    );
  }
}

export default Form;
