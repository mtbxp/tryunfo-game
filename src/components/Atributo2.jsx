import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Atributo2 extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="number">
        Atributo 2:
        <input
          type="number"
          data-testid="attr2-input"
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

Atributo2.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
