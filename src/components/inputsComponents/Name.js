import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="name-input">
        <input
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Name;
