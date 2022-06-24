import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Atributo1 extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="number">
        Atributo 1:
        <input
          type="number"
          data-testid="attr1-input"
          name="number"
          id="number"
          value={ value }
          onChange={ func }
          required
        />
      </label>
    );
  }
}

Atributo1.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
