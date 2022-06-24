import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da Carta
          <input data-testid="name-input" type="text" name="" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea data-testid="description-input" name="" />
        </label>
        <label htmlFor="force">
          Força
          <input data-testid="attr1-input" type="number" name="" />
        </label>
        <label htmlFor="speed">
          Velocidade
          <input data-testid="attr2-input" type="number" name="" />
        </label>
        <label htmlFor="power">
          Poder
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          Url da Imagem
          <input data-testid="image-input" type="text" />
        </label>
        <select name="" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="super" className="super-check">
          Essa carta é um Super Trunfo?
          <input data-testid="trunfo-input" type="checkbox" name="super" id="super" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
