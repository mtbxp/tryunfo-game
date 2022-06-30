import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { todosCards } = this.props;
    return (
      <ul>
        { todosCards.map((card) => (
          <Card key={ card.cardName } carta={ card } />
        )) }
      </ul>
    );
  }
}

CardList.propTypes = {
  todosCards: PropTypes.string.isRequired,
};

export default CardList;
