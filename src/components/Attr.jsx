import React from 'react';
import PropTypes from 'prop-types';

class Attr extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;

    return (
      <div className="attrs">
        <label htmlFor="cardAttr1">
          Attribute 1:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Attribute 2:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Attribute 3:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Attr.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attr;
