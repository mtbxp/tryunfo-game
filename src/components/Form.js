import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome da Carta
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text-area" data-testid="description-input" />
        </label>
        <label htmlFor="atr1">
          Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atr2">
          Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atr3">
          Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select data-testid="rare-input">
            <options value="normal">normal</options>
            <options value="raro">raro</options>
            <options value="muito-raro">muito raro</options>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <label htmlFor="save-button">
          Salvar
          <button type="button" data-testid="save-button" />
        </label>
      </>
    );
  }
}

export default Form;
