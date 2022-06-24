import React from 'react';
import PropTypes from 'prop-types';

class InputRare extends React.Component {
  render() {
    const { cardRare, onChange } = this.props;
    return (
      <select
        name="cardRarity"
        value={ cardRare }
        onChange={ onChange }
        data-testid="rare-input"
      >
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>);
  }
}

InputRare.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRare;
