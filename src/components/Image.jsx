import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/form.css';

export default class Image extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <label htmlFor="image-input">
        Imagem:
        <input
          className="input"
          placeholder="Digite o endereço da imagem"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          id="image-input"
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
