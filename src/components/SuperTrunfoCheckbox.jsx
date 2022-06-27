import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoCheckbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          id="cardTrunfo"
          name="cardTrunfo"
          data-testid="trunfo-input"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

SuperTrunfoCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfoCheckbox;
