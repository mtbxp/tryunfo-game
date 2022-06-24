import React from 'react';
import PropTypes from 'prop-types';

class Attr3Input extends React.Component {
  render() {
    const { cardAttr3, onChange } = this.props;
    return (<input
      type="number"
      name="aatr3"
      value={ cardAttr3 }
      onChange={ onChange }
      data-testid="attr3-input"
    />);
  }
}

Attr3Input.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr3Input;
