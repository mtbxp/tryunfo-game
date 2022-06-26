import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
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
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfo;
