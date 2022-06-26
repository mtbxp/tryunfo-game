import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const {
      cardDescription,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="description-input">
        <input
          data-testid="description-input"
          name="cardDescription"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
