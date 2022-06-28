import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Colection extends React.Component {
  render() {
    const { colection, removeCard } = this.props;

    return (
      <div className="colection">
        { colection.map((card) => {
          const {
            name,
            description,
            attr1,
            attr2,
            attr3,
            image,
            rare,
            superTrunfo,
          } = card;
          return (
            <div key={ name }>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ superTrunfo }
              />
              <button
                name={ name }
                type="button"
                data-testid="delete-button"
                onClick={ removeCard }
              >
                Excluir
              </button>
            </div>
          );
        }) }
      </div>
    );
  }
}

Colection.propTypes = {
  colection: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default Colection;
