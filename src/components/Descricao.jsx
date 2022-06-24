import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Descricao extends Component {
  render() {
    const { value, func } = this.props;

    return (
      <label htmlFor="nome">
        Descrição:
        <textarea cols="50" rows="10">
          <input
            type="text"
            data-testid="description-input"
            name="text"
            id="name"
            value={ value }
            onChange={ func }
            required
          />
        </textarea>
      </label>
    );
  }
}

Descricao.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
