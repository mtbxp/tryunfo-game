import React from 'react';
import PropTypes from 'prop-types';

class NameCard extends React.Component {
  render() {
    const {
      cardName,
    } = this.props;

    return (
      <h2
        data-testid="name-card"
      >
        { cardName }
      </h2>
    );
  }
}

NameCard.propTypes = {
  cardName: PropTypes.string.isRequired,
};

export default NameCard;
