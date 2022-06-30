import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList } = this.props;
    return (
      <div>
        {cardList.map((elem, index) => (
          <div key={ index }>
            <Card
              key={ index }
              cardName={ elem.cardName }
              cardDescription={ elem.cardDescription }
              cardAttr1={ elem.cardAttr1 }
              cardAttr2={ elem.cardAttr2 }
              cardAttr3={ elem.cardAttr3 }
              cardImage={ elem.cardImage }
              cardRare={ elem.cardRare }
              cardTrunfo={ elem.cardTrunfo }
            />
          </div>
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
