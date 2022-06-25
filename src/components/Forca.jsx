import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/form.css';

export default class Forca extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;

    return (
      <label htmlFor="attr2-input">
        Força:
        <input
          className="input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          id="attr2-input"
          data-testid="attr2-input"
          type="number"
          min="0"
        />
      </label>
    );
  }
}

Forca.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
