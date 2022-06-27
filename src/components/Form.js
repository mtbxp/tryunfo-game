import React from 'react';

class Form extends React.Component {
  render() {
    // constructor() {
    //   super();

    //   this.state = {
    //
    //   };

    // }
    // const { cardName: } = this.props.form;

    return (
      <form className="form">
        <h3>Adicionar Nova Carta</h3>
        <label htmlFor="name">
          Nome da Carta:
          <input type="text" data-testid="name-input" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição da Carta:
          <input type="textarea" data-testid="description-input" />
        </label>
        <br />
        <label htmlFor="Attribute1">
          Força:
          <input type="number" data-testid="attr1-input" />
        </label>
        <br />
        <label htmlFor="Attribute2">
          Agilidade:
          <input type="number" data-testid="attr2-input" />
        </label>
        <br />
        <label htmlFor="Attribute3">
          Resistência:
          <input type="number" data-testid="attr3-input" />
        </label>
        <br />
        <label htmlFor="imageUrl">
          URL da Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <br />
        <label htmlFor="rarity">
          Raridade:
          <select data-testid="rare-input">
            <option value="normal">NORMAL</option>
            <option value="raro">RARO</option>
            <option value="muito raro">MUITO RARO</option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox">
          Super Tryunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <br />
        <button type="submit" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
