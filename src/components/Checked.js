import React from 'react';
import PropTypes from 'prop-types';

class Checked extends React.Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="superTrunfo">
        <input
          type="checkbox"
          id="superTrunfo"
          name="superTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

Checked.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checked;
