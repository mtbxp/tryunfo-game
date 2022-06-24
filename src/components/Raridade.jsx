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
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
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
