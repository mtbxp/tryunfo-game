import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Habilidade extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;

    return (
      <label htmlFor="attr1-input">
        Habilidade:
        <input
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          id="attr1-input"
          data-testid="attr1-input"
          type="number"
          min="0"
        />
      </label>
    );
  }
}

Habilidade.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
