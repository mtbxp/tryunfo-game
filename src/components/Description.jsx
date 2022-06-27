import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="cardDescription" className="cardDescription">
        Description:
        <textarea
          type="text"
          id="cardDescription"
          name="cardDescription"
          cols="30"
          rows="10"
          data-testid="description-input"
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
