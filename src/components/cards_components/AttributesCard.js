import React from 'react';
import PropTypes from 'prop-types';

class AttributesCard extends React.Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.props;

    return (
      <div>
        <p
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </p>

        <p
          data-testid="attr2-card"
        >
          { cardAttr2 }
        </p>

        <p
          data-testid="attr3-card"
        >
          { cardAttr3 }
        </p>
      </div>
    );
  }
}

AttributesCard.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default AttributesCard;
