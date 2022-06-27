import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Card Name:
          <input type="text" data-testid="name-input" name="card-name" id="name" />
        </label>
        <label htmlFor="description">
          Card description:
          <textarea
            data-testid="description-input"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Strength:
          <input type="number" data-testid="attr1-input" id="attr1" name="attr1" />
        </label>
        <label htmlFor="attr2">
          Agility:
          <input type="number" data-testid="attr2-input" id="attr2" name="attr2" />
        </label>
        <label htmlFor="attr3">
          Intelligence:
          <input type="number" data-testid="attr3-input" id="attr3" name="attr3" />
        </label>
        <label htmlFor="img-text">
          Img text:
          <input type="text" data-testid="image-input" id="img-text" name="img-text" />
        </label>
        <label htmlFor="rarity">
          Card rarity:
          <select data-testid="rare-input" id="rarity" name="rarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          This card is an trump
          <input type="checkbox" data-testid="trunfo-input" id="trunfo" name="trunfo" />
        </label>
        <button type="submit" data-testid="save-button" id="submit-btn">Salvar</button>
      </form>
    );
  }
}

export default Form;
