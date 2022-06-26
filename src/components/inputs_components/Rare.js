import React from 'react';
import PropTypes from 'prop-types';

class Rare extends React.Component {
  render() {
    const {
      cardRare,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="rare-input">
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

Rare.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Rare;
