import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Atributo3 extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="number">
        Atributo 3:
        <input
          type="number"
          data-testid="attr3-input"
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

Atributo3.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
