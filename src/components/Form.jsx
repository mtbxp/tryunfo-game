import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="name">
            Name
            <input type="text" name="" id="name" data-testid="name-input" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1">
            Attr01
            <input type="number" name="" id="attr1" data-testid="attr1-input" />
          </label>
        </div>
        <div>
          <label htmlFor="attr2">
            Attr02
            <input type="number" name="" id="attr2" data-testid="attr2-input" />
          </label>
        </div>
        <div>
          <label htmlFor="attr3">
            Attr03
            <input type="number" name="" id="attr3" data-testid="attr3-input" />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Image
            <input type="text" name="" id="image" data-testid="image-input" />
          </label>
        </div>
        <div>
          <label htmlFor="rare">
            Rarity
            <select name="" id="rare" data-testid="rare-input">
              <option value="">normal</option>
              <option value="">raro</option>
              <option value="">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo">
            <input type="checkbox" name="" id="trunfo" data-testid="trunfo-input" />
            Super Trunfo
          </label>
        </div>
        <div>
          <button type="button" id="save" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;
