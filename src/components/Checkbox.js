import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    if (hasTrunfo) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }
    return (
      <label htmlFor="trunfo-input">
        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
        />
      </label>
    );
  }
}
// Botafogo bagunçou o Bragantino hj, deu até novo ânimo pra terminar o projeto.

Checkbox.propTypes = {
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Checkbox;
