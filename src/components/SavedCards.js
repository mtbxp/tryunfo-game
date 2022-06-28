import React from 'react';
import PropTypes from 'prop-types';

class SavedCards extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <li>
        { card.cardName }
      </li>
    );
  }
}

SavedCards.propTypes = {
  card: PropTypes.string.isRequired,
};

export default SavedCards;
