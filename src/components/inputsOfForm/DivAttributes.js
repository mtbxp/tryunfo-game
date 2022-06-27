import React from 'react';
import PropTypes from 'prop-types';

class DivAttributes extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    return (
      <div className="divAttributes">
        <h2 data-testid="attr1-card">{`Ad: ${cardAttr1}`}</h2>
        <h2 data-testid="attr2-card">{`Ap: ${cardAttr2}`}</h2>
        <h2 data-testid="attr3-card">{`Resist: ${cardAttr3}`}</h2>
      </div>
    );
  }
}

DivAttributes.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default DivAttributes;
