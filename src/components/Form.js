import React from 'react';
import '../Css/Form.css';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <form className="form">
          <label>
            Insira o nome da sua carta
            <input className="input" type="text" data-testid="name-input" />
          </label>
          <label>
            Insira a descrição da sua carta
            <input className="input" type="textarea" data-testid="description-input" />
          </label>
          <label>
            Insira o valor do primeiro atributo da sua carta
            <input className="input" type="number" data-testid="attr1-input" />
          </label>
          <label>
            Insira o valor do segundo atributo da sua carta
            <input className="input" type="number" data-testid="attr2-input" />
          </label>
          <label>
            Insira o valor do terceiro atributo da sua carta
            <input className="input" type="number" data-testid="attr3-input" />
          </label>
          <label>
            Insira o link da imagem da sua carta
            <input className="input" type="text" data-testid="image-input" />
          </label>
          <label>
            Insira o nivel de raridade
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label>
            Criar como Super Trunfo?
            <input className="input" type="checkbox" data-testid="trunfo-input" />
          </label>
          <button id="save-button" type="button" data-testid="save-button">Salvar</button>
        </form>
      </fieldset>
    );
  }
}

export default Form;
