import React from 'react';

const rarities = ['normal', 'raro', 'muito raro'];

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="descr">
          Descricao
          <textarea
            data-testid="description-input"
            id="descr"
            name="descr"
          />
        </label>
        <label htmlFor="attr1">
          Forca
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Inteligencia
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Agilidade
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="attr3"
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="img"
            name="img"
          />
        </label>
        <label htmlFor="rarities">
          Raridades
          <select id="rarities" name="rarities" data-testid="rare-input">
            {
              rarities.map((rarity, key) => <option key={ key }>{rarity}</option>)
            }
          </select>
        </label>
        <label htmlFor="superTrunfo">
          É Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superTrunfo"
            name="superTrunfo"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
