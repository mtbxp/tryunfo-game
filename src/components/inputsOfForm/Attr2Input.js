import React from 'react';
import PropTypes from 'prop-types';

class Attr2Input extends React.Component {
  render() {
    const { cardAttr2, onChange } = this.props;
    return (<input
      type="number"
      name="attr2"
      value={ cardAttr2 }
      onChange={ onChange }
      data-testid="attr2-input"
    />);
  }
}

Attr2Input.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr2Input;
