import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-input">
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          name="cardTrunfo"
          id="trunfo-input"
          data-testid="trunfo-input"
        />
        Super Trunfo!
      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
