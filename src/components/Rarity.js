import React, { Component } from 'react';

class Rarity extends Component {
  render() {
    return (
      <label htmlFor="rarity">
        Raridade
        <select
          data-testid="rare-input"
          type="select"
          name="rarity"
          id="rarity"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

export default Rarity;
