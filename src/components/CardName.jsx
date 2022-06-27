import React from 'react';
import PropTypes from 'prop-types';

class CardName extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="cardName">
        Name:
        <input
          type="text"
          id="cardName"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
