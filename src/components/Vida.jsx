import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Vida extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;

    return (
      <label htmlFor="attr3-input">
        Vida:
        <input
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          id="attr3-input"
          data-testid="attr3-input"
          type="number"
          min="0"
        />
      </label>
    );
  }
}

Vida.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
