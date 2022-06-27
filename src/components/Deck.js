import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deck } = this.props;
    return (
      <div>
        <h4>Todas as Cartas</h4>
        {deck.map((card) => {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } = card;
          return (
            <div key={ cardName }>
              <h3>{cardName}</h3>
              <img src={ cardImage } alt={ cardName } />
              <p>{cardDescription}</p>
              <p>{cardAttr1}</p>
              <p>{cardAttr2}</p>
              <p>{cardAttr3}</p>
              <p>{cardRare}</p>
              {cardTrunfo ? <p>Super Trunfo</p> : ''}
            </div>
            // <Card
            //   key={ cardName }
            //   cardName={ cardName }
            //   cardDescription={ cardDescription }
            //   cardAttr1={ cardAttr1 }
            //   cardAttr2={ cardAttr2 }
            //   cardAttr3={ cardAttr3 }
            //   cardImage={ cardImage }
            //   cardRare={ cardRare }
            //   cardTrunfo={ cardTrunfo }
            // />
          );
        })}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Deck;
