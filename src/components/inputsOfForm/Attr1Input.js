import React from 'react';
import PropTypes from 'prop-types';

class Attr1Input extends React.Component {
  render() {
    const { cardAttr1, onChange } = this.props;
    return (<input
      type="number"
      name="attr1"
      min={ 0 }
      max={ 90 }
      data-testid="attr1-input"
      value={ cardAttr1 }
      onChange={ onChange }
    />);
  }
}

Attr1Input.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr1Input;
