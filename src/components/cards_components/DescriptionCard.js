import React from 'react';
import PropTypes from 'prop-types';

class DescriptionCard extends React.Component {
  render() {
    const {
      cardDescription,
    } = this.props;

    return (
      <p
        data-testid="description-card"
      >
        { cardDescription }
      </p>
    );
  }
}

DescriptionCard.propTypes = {
  cardDescription: PropTypes.string.isRequired,
};

export default DescriptionCard;
