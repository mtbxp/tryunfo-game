import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Nome extends Component {
  render() {
    const { onInputChange, cardName } = this.props;

    return (
      <label htmlFor="name-input">
        Nome:
        <input
          placeholder="Digite o nome da carta"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          id="name-input"
          data-testid="name-input"
          type="text"
        />
      </label>
    );
  }
}

Nome.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
