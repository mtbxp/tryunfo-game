import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="nome">
            Nome da Carta:
            <input data-testid="name-input" type="text" name="nome" />
          </label>

          <label htmlFor="descricao">
            Descrição da Carta:
            <input data-testid="description-input" type="textarea" name="descricao" />
          </label>

          <label htmlFor="poder">
            Poder:
            <input data-testid="attr1-input" type="number" name="poder" />
          </label>

          <label htmlFor="vida">
            Vida:
            <input data-testid="attr2-input" type="number" name="vida" />
          </label>

          <label htmlFor="resistencia">
            Resistência:
            <input data-testid="attr3-input" type="number" name="resistencia" />
          </label>

          <label htmlFor="url">
            URL da Imagem da Carta:
            <input data-testid="image-input" type="select" name="url" />
          </label>

          <label htmlFor="raridade">
            <select data-testid="rare-input" name="raridade">
              <option value="normal"> Normal </option>
              <option value="raro" selected> Raro </option>
              <option value="muito raro"> Muito raro </option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trunfo?
            <input data-testid="trunfo-input" type="checkbox" name="trunfo" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </fieldset>
      </div>
    );
  }
}

export default Form;
