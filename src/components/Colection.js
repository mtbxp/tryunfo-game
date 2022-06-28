import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Colection extends React.Component {
  render() {
    const { colection } = this.props;

    return (
      <div>
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
            <Card
              key={ name }
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ superTrunfo }
            />
          );
        }) }
      </div>
    );
  }
}

Colection.propTypes = {
  colection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Colection;
