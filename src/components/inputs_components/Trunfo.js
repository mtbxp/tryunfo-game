import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
      hasTrunfo,
    } = this.props;

    const trunfoInput = (
      <label htmlFor="trunfo-input">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    const alreadyHasTrunfo = 'Você já tem um Super Trunfo em seu baralho';

    return (
      hasTrunfo ? alreadyHasTrunfo : trunfoInput
    );
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.func.isRequired,
};

export default Trunfo;
