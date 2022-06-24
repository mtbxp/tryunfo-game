import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Descricao extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="description-input">
        Descrição:
        <textarea cols="50" rows="10">
          <input
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description-input"
            data-testid="description-input"
            type="textarea"
          />
        </textarea>
      </label>
    );
  }
}

Descricao.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
