import React from 'react';
import PropTypes from 'prop-types';

class CardName extends React.Component {
  render() {
    const { value, handlerCardInfo } = this.props;

    return (
      <label htmlFor="cardName">
        Name:
        <input
          type="text"
          id="cardName"
          name="cardName"
          data-testid="name-input"
          value={ value }
          onChange={ handlerCardInfo }
        />
      </label>
    );
  }
}

CardName.propTypes = {
  value: PropTypes.string.isRequired,
  handlerCardInfo: PropTypes.func.isRequired,
};

export default CardName;
