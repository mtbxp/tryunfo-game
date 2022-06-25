import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/form.css';

export default class Descricao extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="description-input">
        Descrição:
        <textarea
          className="textarea"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          id="description-input"
          data-testid="description-input"
          type="textarea"
        />
      </label>
    );
  }
}

Descricao.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
