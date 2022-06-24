import PropTypes from 'prop-types';
import React, { Component } from 'react';

const rarityLetter = ['normal', 'raro', 'muito raro'];

export default class Raridade extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="name">
        Raridade:
        <select id="name">
          <option value="">Selecione</option>
          {
            rarityLetter.map((letter, key) => (
              <option key={ key }>{letter}</option>
            ))
          }
          <input
            type="text"
            data-testid="rare-input"
            name="name"
            id="name"
            value={ value }
            onChange={ func }
            required
          />
        </select>
      </label>
    );
  }
}

Raridade.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
