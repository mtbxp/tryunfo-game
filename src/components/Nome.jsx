import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Nome extends Component {
  render() {
    const { onInputChange, cardName } = this.props;

    return (
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          data-testid="name-input"
          name="name"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

Nome.propTypes = {
  onInputChange: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};
