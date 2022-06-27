import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoCheckbox extends React.Component {
  render() {
    const { cardTrunfo, handlerCardInfo } = this.props;

    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          id="cardTrunfo"
          name="cardTrunfo"
          value={ cardTrunfo }
          onChange={ handlerCardInfo }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

SuperTrunfoCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  handlerCardInfo: PropTypes.func.isRequired,
};

export default SuperTrunfoCheckbox;
