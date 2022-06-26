import React from 'react';
import PropTypes from 'prop-types';

class RareCard extends React.Component {
  render() {
    const {
      cardRare,
    } = this.props;

    return (
      <p
        data-testid="rare-card"
      >
        { cardRare }
      </p>
    );
  }
}

RareCard.propTypes = {
  cardRare: PropTypes.string.isRequired,
};

export default RareCard;
