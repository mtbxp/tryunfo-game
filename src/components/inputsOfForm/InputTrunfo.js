import React from 'react';
import PropTypes from 'prop-types';

class InputTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onChange } = this.props;
    return (<input
      type="checkbox"
      name="cardTrunfo"
      checked={ cardTrunfo }
      onChange={ onChange }
      data-testid="trunfo-input"
    />);
  }
}

InputTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTrunfo;
