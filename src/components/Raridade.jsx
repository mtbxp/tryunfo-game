import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/form.css';

export default class Raridade extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <label htmlFor="rare-input">
        Raridade:
        <select
          className="select"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          id="rare-input"
          data-testid="rare-input"
        >
          Raridade:
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

Raridade.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
