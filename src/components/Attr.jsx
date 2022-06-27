import React from 'react';
import PropTypes from 'prop-types';

class Attr extends React.Component {
  render() {
    const { value, handlerCardInfo } = this.props;

    return (
      <div className="attrs">
        <label htmlFor="cardAttr1">
          Attribute 1:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ value }
            onChange={ handlerCardInfo }
          />
        </label>

        <label htmlFor="cardAttr2">
          Attribute 2:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ value }
            onChange={ handlerCardInfo }
          />
        </label>

        <label htmlFor="cardAttr3">
          Attribute 3:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ value }
            onChange={ handlerCardInfo }
          />
        </label>
      </div>
    );
  }
}

Attr.propTypes = {
  value: PropTypes.number.isRequired,
  handlerCardInfo: PropTypes.func.isRequired,
};

export default Attr;
