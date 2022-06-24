import React from 'react';
import PropTypes from 'prop-types';

class InputDescription extends React.Component {
  render() {
    const { cardDescription, onChange } = this.props;
    return (<textarea
      name="cardInfo"
      value={ cardDescription }
      data-testid="description-input"
      onChange={ onChange }
    />);
  }
}

InputDescription.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescription;
