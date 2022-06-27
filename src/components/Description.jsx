import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { value, handlerCardInfo } = this.props;

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
          value={ value }
          onChange={ handlerCardInfo }
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  handlerCardInfo: PropTypes.func.isRequired,
};

export default Description;
