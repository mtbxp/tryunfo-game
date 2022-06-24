import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Nome extends Component {
  render() {
    const { func, value } = this.props;

    return (
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          data-testid="name-input"
          name="nome"
          id="name"
          value={ value }
          onChange={ func }
          required
        />
      </label>
    );
  }
}

Nome.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
