import React from 'react';
import PropTypes from 'prop-types';

class InputTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onChange, hasTrunfo } = this.props;
    const elementInput = (<input
      type="checkbox"
      name="cardTrunfo"
      checked={ cardTrunfo }
      onChange={ onChange }
      data-testid="trunfo-input"
    />);

    return (hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
      : elementInput);
  }
}

InputTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default InputTrunfo;
