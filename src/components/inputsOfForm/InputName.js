import React from 'react';
import PropTypes from 'prop-types';

class InputName extends React.Component {
  render() {
    const { onChange, cardName } = this.props;
    return (<input
      name="cardName"
      type="text"
      onChange={ onChange }
      value={ cardName }
      data-testid="name-input"
    />);
  }
}

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default InputName;
